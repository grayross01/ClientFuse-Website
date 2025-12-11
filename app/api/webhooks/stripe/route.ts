import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const brevoApiKey = process.env.BREVO_API_KEY!;

async function addContactToBrevo(email: string, firstName?: string, lastName?: string) {
  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': brevoApiKey,
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName || '',
        LASTNAME: lastName || '',
      },
      updateEnabled: true, // Update if contact already exists
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    // Don't throw on duplicate contact (already exists)
    if (response.status === 400 && error.includes('duplicate')) {
      console.log(`Contact ${email} already exists in Brevo`);
      return { duplicate: true };
    }
    throw new Error(`Brevo API error: ${error}`);
  }

  return response.json();
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle customer.created event
  if (event.type === 'customer.created') {
    const customer = event.data.object as Stripe.Customer;
    
    console.log(`New Stripe customer: ${customer.email}`);

    if (customer.email) {
      try {
        // Parse name if available
        let firstName = '';
        let lastName = '';
        
        if (customer.name) {
          const nameParts = customer.name.split(' ');
          firstName = nameParts[0] || '';
          lastName = nameParts.slice(1).join(' ') || '';
        }

        await addContactToBrevo(customer.email, firstName, lastName);
        console.log(`Added ${customer.email} to Brevo`);
      } catch (error) {
        console.error('Error adding contact to Brevo:', error);
        // Don't return error - we still want to acknowledge the webhook
      }
    }
  }

  return NextResponse.json({ received: true });
}
