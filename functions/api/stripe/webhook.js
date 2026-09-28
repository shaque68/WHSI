import { jsonResponse } from '../../_utils/stripe.js';

const HANDLED_EVENT_TYPES = new Set([
  'checkout.session.completed',
  'checkout.session.async_payment_succeeded',
  'checkout.session.async_payment_failed',
  'invoice.paid',
  'invoice.payment_failed',
]);
const SIGNATURE_TOLERANCE_SECONDS = 300;

function hexToBytes(value) {
  if (!/^[\da-f]+$/i.test(value) || value.length % 2 !== 0) {
    return null;
  }

  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

async function verifySignature(payload, header, secret) {
  const parts = header.split(',').map((part) => part.split('=', 2));
  const timestamp = parts.find(([key]) => key === 't')?.[1];
  const signatures = parts
    .filter(([key]) => key === 'v1')
    .map(([, value]) => hexToBytes(value))
    .filter(Boolean);

  if (!timestamp || !/^\d+$/.test(timestamp) || signatures.length === 0) {
    return false;
  }

  const timestampSeconds = Number(timestamp);
  const nowSeconds = Math.floor(Date.now() / 1000);
  if (
    !Number.isSafeInteger(timestampSeconds) ||
    Math.abs(nowSeconds - timestampSeconds) > SIGNATURE_TOLERANCE_SECONDS
  ) {
    return false;
  }

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify'],
  );
  const signedPayload = new TextEncoder().encode(`${timestamp}.${payload}`);

  for (const signature of signatures) {
    if (await crypto.subtle.verify('HMAC', key, signature, signedPayload)) {
      return true;
    }
  }

  return false;
}

export async function onRequestPost({ request, env }) {
  const secret = env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('Stripe webhook is not configured.');
    return jsonResponse({ error: 'Stripe webhook is not configured.' }, 503);
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return jsonResponse({ error: 'Missing Stripe signature.' }, 400);
  }

  const payload = await request.text();
  let isValid;
  try {
    isValid = await verifySignature(payload, signature, secret);
  } catch (error) {
    console.error('Stripe webhook signature verification failed:', error);
    return jsonResponse({ error: 'Invalid Stripe signature.' }, 400);
  }

  if (!isValid) {
    console.warn('Stripe webhook signature verification failed.');
    return jsonResponse({ error: 'Invalid Stripe signature.' }, 400);
  }

  let event;
  try {
    event = JSON.parse(payload);
  } catch {
    return jsonResponse({ error: 'Invalid Stripe event payload.' }, 400);
  }

  if (HANDLED_EVENT_TYPES.has(event.type)) {
    console.info('Stripe webhook event received:', {
      id: event.id,
      type: event.type,
      livemode: event.livemode,
    });
  }

  return jsonResponse({ received: true });
}
