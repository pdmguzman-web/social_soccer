import Stripe from "stripe";
import { User } from "wasp/entities";
import { CHECKOUT_CANCELED_URL, CHECKOUT_SUCCESS_URL } from "../paths";
import { stripeClient } from "./stripeClient";

/**
 * Returns a Stripe customer for the given User email, creating a customer if none exist.
 * Implements email uniqueness logic since Stripe doesn't enforce unique emails.
 */
export async function ensureStripeCustomer(
  userEmail: NonNullable<User["email"]>,
): Promise<Stripe.Customer> {
  if (!stripeClient) {
    return {
      id: `demo-customer-${userEmail.replace(/[^a-z0-9]/gi, "").toLowerCase()}`,
      object: "customer",
      created: Math.floor(Date.now() / 1000),
      email: userEmail,
      livemode: false,
      metadata: {},
      default_source: null,
      invoice_prefix: "demo",
      name: null,
      phone: null,
      tax_exempt: "none",
      test_clock: null,
      balance: 0,
      currency: null,
      delinquent: false,
      address: null,
      description: null,
      discount: null,
      next_invoice_sequence: null,
      preferred_locales: [],
      shipping: null,
      tax_ids: null,
      last_response: undefined,
    } as Stripe.Customer;
  }

  const customers = await stripeClient.customers.list({
    email: userEmail,
  });

  if (customers.data.length === 0) {
    return stripeClient.customers.create({
      email: userEmail,
    });
  } else {
    return customers.data[0];
  }
}

interface CreateStripeCheckoutSessionParams {
  priceId: Stripe.Price["id"];
  customerId: Stripe.Customer["id"];
  mode: Stripe.Checkout.Session.Mode;
}

export function createStripeCheckoutSession({
  priceId,
  customerId,
  mode,
}: CreateStripeCheckoutSessionParams): Promise<Stripe.Checkout.Session> {
  if (!stripeClient) {
    return Promise.resolve({
      id: `demo-checkout-${Date.now()}`,
      object: "checkout.session",
      url: CHECKOUT_SUCCESS_URL,
      status: "complete",
      mode,
      customer: customerId,
      customer_details: null,
      payment_status: "paid",
      amount_subtotal: 0,
      amount_total: 0,
      currency: "usd",
      created: Math.floor(Date.now() / 1000),
      expires_at: Math.floor(Date.now() / 1000) + 1800,
      success_url: CHECKOUT_SUCCESS_URL,
      cancel_url: CHECKOUT_CANCELED_URL,
      payment_intent: null,
      subscription: null,
      line_items: null,
      metadata: {},
      automatic_tax: { enabled: true },
      allow_promotion_codes: true,
      invoice_creation: getInvoiceCreationConfig(mode),
      customer_update: {
        address: "auto",
      },
    } as Stripe.Checkout.Session);
  }

  return stripeClient.checkout.sessions.create({
    customer: customerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode,
    success_url: CHECKOUT_SUCCESS_URL,
    cancel_url: CHECKOUT_CANCELED_URL,
    automatic_tax: { enabled: true },
    allow_promotion_codes: true,
    customer_update: {
      address: "auto",
    },
    invoice_creation: getInvoiceCreationConfig(mode),
  });
}

/**
 * Stripe automatically creates invoices for subscriptions.
 * For one-time payments, we must enable them manually.
 * However, enabling invoices for subscriptions will throw an error.
 */
function getInvoiceCreationConfig(
  mode: Stripe.Checkout.Session.Mode,
): Stripe.Checkout.SessionCreateParams["invoice_creation"] {
  return mode === "payment"
    ? {
        enabled: true,
      }
    : undefined;
}
