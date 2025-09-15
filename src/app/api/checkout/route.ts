import { type NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { origin } = new URL(request.url);

    const session = await stripe.checkout.sessions.create({
      cancel_url: `${origin}/cancel`,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              description:
                "The world's most advanced gaming mouse. 46 grams of pure innovation.",
              images: ['https://arye-ui.vercel.app/arye-6.webp'],
              name: 'ARYE RCC-1 Gaming Mouse',
            },
            unit_amount: 39900, // $399.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 },
    );
  }
}
