import { getStripeError, jsonResponse, stripeFetch } from '../_utils/stripe.js';

const MINIMUM_AMOUNT_CENTS = 500;
const MAXIMUM_AMOUNT_CENTS = 10000000;

export async function onRequestPost({ request, env }) {
  const secretKey = env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return jsonResponse(
      { error: 'Donations are not configured yet. Please contact the organization directly.' },
      503,
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Please provide a valid donation request.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse({ error: 'Please provide a valid donation request.' }, 400);
  }

  const amount = Number(body.amount);
  const amountInCents = amount * 100;
  const amountCents = Math.round(amountInCents);
  const givingType = body.givingType;

  if (
    !Number.isFinite(amount) ||
    Math.abs(amountInCents - amountCents) > 1e-7 ||
    amountCents < MINIMUM_AMOUNT_CENTS ||
    amountCents > MAXIMUM_AMOUNT_CENTS
  ) {
    return jsonResponse({ error: 'Enter a donation between $5 and $100,000.' }, 400);
  }

  if (givingType !== 'one-time' && givingType !== 'monthly') {
    return jsonResponse({ error: 'Choose a valid donation frequency.' }, 400);
  }

  const siteUrl = env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  const params = new URLSearchParams({
    mode: givingType === 'monthly' ? 'subscription' : 'payment',
    'line_items[0][price_data][currency]': 'usd',
    'line_items[0][price_data][product_data][name]':
      givingType === 'monthly'
        ? 'Monthly donation to World Humanity Services'
        : 'Donation to World Humanity Services',
    'line_items[0][price_data][unit_amount]': String(amountCents),
    'line_items[0][quantity]': '1',
    submit_type: 'donate',
    billing_address_collection: 'auto',
    success_url: `${siteUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/donate?canceled=true`,
    'metadata[organization]': 'World Humanity Services Inc.',
    'metadata[giving_type]': givingType,
  });

  if (givingType === 'monthly') {
    params.set('line_items[0][price_data][recurring][interval]', 'month');
  }

  if (typeof body.email === 'string' && body.email.trim()) {
    params.set('customer_email', body.email.trim());
  }

  try {
    const response = await stripeFetch('/checkout/sessions', secretKey, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: params,
    });
    const result = await response.json();

    if (!response.ok || typeof result.url !== 'string') {
      console.error('Stripe Checkout session creation failed:', {
        status: response.status,
        code: result?.error?.code,
        type: result?.error?.type,
      });
      return jsonResponse(
        { error: 'We could not start the secure donation checkout. Please try again or contact us directly.' },
        502,
      );
    }

    return jsonResponse({ url: result.url });
  } catch (error) {
    console.error('Stripe Checkout session request failed:', error);
    return jsonResponse(
      { error: 'We could not start the secure donation checkout. Please try again or contact us directly.' },
      502,
    );
  }
}
