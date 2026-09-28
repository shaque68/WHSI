import { getStripeError, jsonResponse, stripeFetch } from '../_utils/stripe.js';

const SESSION_ID_PATTERN = /^cs_(test|live)_[A-Za-z0-9]+$/;

export async function onRequestGet({ request, env }) {
  const secretKey = env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return jsonResponse({ status: 'unavailable' }, 503);
  }

  const sessionId = new URL(request.url).searchParams.get('session_id') || '';
  if (!SESSION_ID_PATTERN.test(sessionId)) {
    return jsonResponse({ status: 'unverified' }, 400);
  }

  try {
    const response = await stripeFetch(
      `/checkout/sessions/${encodeURIComponent(sessionId)}`,
      secretKey,
    );

    if (!response.ok) {
      const error = await getStripeError(response);
      console.error('Stripe Checkout session verification failed:', {
        status: response.status,
        code: error.code,
        type: error.type,
      });
      return jsonResponse({ status: response.status === 404 ? 'unverified' : 'unavailable' }, 200);
    }

    const session = await response.json();
    if (session.status === 'complete' && session.payment_status === 'paid') {
      return jsonResponse({ status: 'confirmed' });
    }

    return jsonResponse({
      status: session.status === 'complete' ? 'processing' : 'unverified',
    });
  } catch (error) {
    console.error('Stripe Checkout session request failed:', error);
    return jsonResponse({ status: 'unavailable' }, 200);
  }
}
