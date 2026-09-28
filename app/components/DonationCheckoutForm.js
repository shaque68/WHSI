"use client";

import { useState } from 'react';

const presetAmounts = [25, 50, 100, 250];

export default function DonationCheckoutForm() {
  const [amount, setAmount] = useState('50');
  const [givingType, setGivingType] = useState('one-time');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, givingType, email }),
      });
      const result = await response.json();

      if (!response.ok || !result.url) {
        throw new Error(result.error || 'We could not start the donation checkout.');
      }

      window.location.assign(result.url);
    } catch (requestError) {
      setError(requestError.message);
      setLoading(false);
    }
  };

  return (
    <div className="card-surface p-6 sm:p-8">
      <h2 className="mb-2 font-display text-2xl font-semibold text-brand-900">Choose your gift</h2>
      <p className="mb-6 text-sm leading-6 text-slate-600">
        Select an amount and frequency. Payment details are entered on Stripe Checkout.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="mb-3 block text-sm font-semibold text-slate-700">Giving frequency</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['one-time', 'One-time gift'],
              ['monthly', 'Monthly gift'],
            ].map(([value, label]) => (
              <label key={value} className={`cursor-pointer rounded-xl border px-4 py-3 text-center font-semibold transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-700 ${givingType === value ? 'border-brand-700 bg-brand-50 text-brand-900' : 'border-slate-300 text-slate-700 hover:border-brand-700'}`}>
                <input
                  className="sr-only"
                  type="radio"
                  name="givingType"
                  value={value}
                  checked={givingType === value}
                  onChange={(event) => setGivingType(event.target.value)}
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="donation-amount" className="mb-3 block text-sm font-semibold text-slate-700">
            Donation amount (USD)
          </label>
          <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                aria-pressed={amount === String(preset)}
                className={`min-h-11 rounded-lg border px-3 py-2 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 ${amount === String(preset) ? 'border-brand-700 bg-brand-50 text-brand-900' : 'border-slate-300 text-slate-700 hover:border-brand-700'}`}
                onClick={() => setAmount(String(preset))}
              >
                ${preset}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-3 text-slate-500">$</span>
            <input
              id="donation-amount"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-8 pr-4 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/20"
              type="number"
              min="5"
              max="100000"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="donation-email" className="mb-2 block text-sm font-semibold text-slate-700">
            Email for your receipt (optional)
          </label>
          <input
            id="donation-email"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/20"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </div>

        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? 'Opening secure checkout...' : givingType === 'monthly' ? 'Start monthly donation' : 'Donate securely'}
        </button>
        {error ? (
          <p className="font-semibold text-red-700" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    </div>
  );
}
