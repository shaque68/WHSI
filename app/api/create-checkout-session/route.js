import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MINIMUM_AMOUNT_CENTS = 500;
const MAXIMUM_AMOUNT_CENTS = 10000000;

function getSiteUrl(request) {
  return process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
}

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: 'Donations are not configured yet. Please contact the organization directly.' },
      { status: 503 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please provide a valid donation request.' }, { status: 400 });
  }

  const amount = Number(body.amount);
  const givingType = body.givingType === 'monthly' ? 'monthly' : 'one-time';
  const amountCents = Math.round(amount * 100);

  if (!Number.isFinite(amount) || !Number.isInteger(amountCents) || amountCents < MINIMUM_AMOUNT_CENTS || amountCents > MAXIMUM_AMOUNT_CENTS) {
    return NextResponse.json(
      { error: 'Enter a donation between $5 and $100,000.' },
      { status: 400 },
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const siteUrl = getSiteUrl(request);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: givingType === 'monthly' ? 'subscription' : 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: givingType === 'monthly' ? 'Monthly donation to World Humanity Services' : 'Donation to World Humanity Services',
            },
            unit_amount: amountCents,
            ...(givingType === 'monthly' ? { recurring: { interval: 'month' } } : {}),
          },
          quantity: 1,
        },
      ],
      submit_type: 'donate',
      billing_address_collection: 'auto',
      customer_email: typeof body.email === 'string' && body.email.trim() ? body.email.trim() : undefined,
      success_url: `${siteUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/donate?canceled=true`,
      metadata: {
        organization: 'World Humanity Services Inc.',
        giving_type: givingType,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe Checkout session creation failed:', error);
    return NextResponse.json(
      { error: 'We could not start the secure donation checkout. Please try again or contact us directly.' },
      { status: 502 },
    );
  }
}
