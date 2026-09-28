const STRIPE_API_BASE = 'https://api.stripe.com/v1';

export function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

export function stripeAuthorization(secretKey) {
  return `Basic ${btoa(`${secretKey}:`)}`;
}

export async function stripeFetch(path, secretKey, init = {}) {
  return fetch(`${STRIPE_API_BASE}${path}`, {
    ...init,
    headers: {
      authorization: stripeAuthorization(secretKey),
      ...init.headers,
    },
  });
}

export async function getStripeError(response) {
  const result = await response.json().catch(() => ({}));
  const stripeError = result?.error;
  return {
    code: typeof stripeError?.code === 'string' ? stripeError.code : undefined,
    type: typeof stripeError?.type === 'string' ? stripeError.type : undefined,
  };
}
