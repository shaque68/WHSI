"use client";

import { useEffect, useState } from 'react';

const messages = {
  loading: {
    eyebrow: 'Donation status',
    title: 'Checking your donation…',
    description: 'We’re securely checking the payment status with Stripe.',
  },
  confirmed: {
    eyebrow: 'Thank you',
    title: 'Your donation is confirmed.',
    description: 'Thank you for supporting World Humanity Services. Stripe will send your receipt to the email address provided at checkout.',
  },
  processing: {
    eyebrow: 'Payment processing',
    title: 'Your checkout is complete.',
    description: 'Stripe has not confirmed the payment yet. Please check your receipt email before trying again.',
  },
  unverified: {
    eyebrow: 'Donation status',
    title: 'We couldn’t confirm this donation.',
    description: 'This page does not have a verified payment confirmation. If you completed checkout, check for a receipt from Stripe before trying again.',
  },
  unavailable: {
    eyebrow: 'Donation status',
    title: 'We can’t verify your donation right now.',
    description: 'Please check your receipt email from Stripe. If you need help, contact our team before submitting another gift.',
  },
};

export default function DonationStatus() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    if (!sessionId) {
      setStatus('unverified');
      return;
    }

    const controller = new AbortController();
    const query = new URLSearchParams({ session_id: sessionId });

    fetch(`/api/checkout-session?${query}`, {
      cache: 'no-store',
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Donation status request failed.');
        }
        return response.json();
      })
      .then((result) => {
        setStatus(Object.hasOwn(messages, result.status) && result.status !== 'loading'
          ? result.status
          : 'unavailable');
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setStatus('unavailable');
        }
      });

    return () => controller.abort();
  }, []);

  const content = messages[status];

  return (
    <div aria-live="polite" aria-busy={status === 'loading'}>
      <p className="eyebrow">{content.eyebrow}</p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
        {content.title}
      </h1>
      <p className="hero-text mt-5">{content.description}</p>
    </div>
  );
}
