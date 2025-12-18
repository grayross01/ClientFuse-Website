import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Default list ID, you can change this in Brevo
        updateEnabled: true,
      }),
    });

    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({ success: true });
    }

    // Handle duplicate contacts (already subscribed)
    if (response.status === 400) {
      const data = await response.json();
      if (data.code === 'duplicate_parameter') {
        return NextResponse.json({ success: true, message: 'Already subscribed!' });
      }
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Brevo API error:', errorData);
    
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}









