# Cloudflare Pages and Stripe setup

The Next.js app builds to static HTML in `out/`. Cloudflare Pages serves these
files directly and routes the Stripe endpoints to Pages Functions under
`functions/api/`. No database or always-running web server is required.

## Free-tier expectations

Cloudflare's current free limits include unlimited static asset requests and up
to 100,000 combined Worker/Pages Function requests per day per account. Each
free-plan Function invocation has a 10 ms CPU-time limit. The donation API
routes make small requests to Stripe and do not keep a server running between
visits, so they are a reasonable starting point for a low-traffic nonprofit.
Monitor usage in Cloudflare as traffic grows; exceeding platform quotas or
limits can affect dynamic requests. Stripe's payment-processing fees and a
custom-domain registration, if used, are separate costs.

The app verifies Stripe webhook signatures and acknowledges these event types:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `checkout.session.async_payment_failed`
- `invoice.paid`
- `invoice.payment_failed`

The endpoint is `POST /api/stripe/webhook`. It reads Stripe's raw request body
before verifying the `Stripe-Signature` header using the Web Crypto API. Invalid
signatures receive HTTP 400; missing server configuration receives HTTP 503 so
Stripe can retry later.

This configuration does **not** store donation or customer records and does not initiate emails or other follow-up. For the selected Stripe-only setup, supported events are acknowledged and a minimal event ID/type/mode summary is written to the server log. Duplicate deliveries are harmless because this handler has no side effects. Add durable storage and idempotent processing before using webhooks to drive donor records, accounting, or fulfillment.

## Test locally

1. Install the [Stripe CLI](https://docs.stripe.com/stripe-cli) and authenticate
   it with a Stripe account:

   ```powershell
   stripe login
   ```

2. Copy `.dev.vars.example` to `.dev.vars`, replace the placeholders with a
   Stripe **test-mode** secret key, and keep the CLI signing secret blank until
   the next step. `.dev.vars` is ignored by Git.

3. Start the static export and Pages Functions locally:

   ```powershell
   npm run dev
   ```

   This builds the static site and starts Wrangler, which serves it at
   `http://localhost:8788` by default. After changing site code, stop the local
   preview and run `npm run dev` again to rebuild and restart it.

4. In another terminal, forward Stripe test events to the local endpoint:

   ```powershell
   stripe listen --forward-to localhost:8788/api/stripe/webhook
   ```

5. Copy the `whsec_...` signing secret printed by `stripe listen` into
   `.dev.vars` as `STRIPE_WEBHOOK_SECRET`, then restart `npm run pages:dev`.
   Keep both Stripe secrets server-side. Never use a `NEXT_PUBLIC_` prefix for
   them, commit them, or paste them into source code.

6. Trigger a test event:

   ```powershell
   stripe trigger checkout.session.completed
   ```

   The CLI should report delivery to the local endpoint, Wrangler should return
   HTTP 200, and the local log should show the event ID, type, and test/live
   mode. This fixture does not create a real donation record or charge a donor.

The signing secret from `stripe listen` is for local forwarding. It is not the
same as the Stripe API key and is not the secret for a Dashboard-registered
production endpoint.

## Configure a deployed endpoint

1. Create a Cloudflare Pages project connected to the Git repository, or deploy
   from the command line after logging into Wrangler:

   ```powershell
   npx wrangler login
   npm run pages:deploy
   ```

   For a Git-connected Pages project, use `npm run build` as the build command
   and `out` as the build output directory. The Pages project name in
   `wrangler.toml` (`whsi`) must match the Pages project name in your account;
   change it before deploying if you choose a different name.
2. Add `STRIPE_SECRET_KEY` as a **secret** in the Cloudflare Pages project's
   production environment variables. Set it to the test-mode key while first
   testing. Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL if it differs
   from the request origin.
3. In Stripe Workbench, open **Webhooks** and create an event destination for
   your account. Choose **Webhook endpoint** and select the five event types
   listed above. Set its URL to
   `https://<your-pages-domain>/api/stripe/webhook`.
4. Copy the `whsec_...` secret for that specific endpoint into the Cloudflare
   Pages project's `STRIPE_WEBHOOK_SECRET` **secret** variable. Do not use the
   local CLI signing secret in production. Redeploy after setting secrets.
5. Send a test event from Workbench. Confirm successful delivery and inspect the
   Pages Function logs. Repeat in live mode only after connecting the production
   site and matching the live API key with the live endpoint's signing secret.

Stripe retries deliveries that fail. This endpoint acknowledges recognized and
unrecognized valid events with HTTP 200 after signature verification. If adding
side effects later, persist processed Stripe event IDs and make handling
idempotent before acknowledging an event.
