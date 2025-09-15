import { stripePromise } from './stripe';

export async function redirectToCheckout() {
  try {
    const response = await fetch('/api/checkout', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { sessionId } = await response.json();

    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
  }
}
