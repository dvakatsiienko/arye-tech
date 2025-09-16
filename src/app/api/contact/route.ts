import { createElement } from 'react';
import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import { ContactEmailTemplate } from '@/components/ContactEmailTemplate';

// Initialize Resend (lazy initialization to avoid build-time errors)
const getResend = () => {
  if (!process.env.RESEND_KEY) {
    throw new Error('RESEND_KEY is not set');
  }
  return new Resend(process.env.RESEND_KEY);
};

/* Types */
interface IContactFormData {
  name: string;
  email: string;
  message: string;
}

/* Helpers */
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

const validateFormData = (
  data: any,
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.name || data.name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.message || data.message.length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (data.name && data.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  if (data.message && data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  return {
    errors,
    isValid: errors.length === 0,
  };
};

export async function POST(request: NextRequest) {
  try {
    // Check environment variables
    if (!process.env.RESEND_CONTACT_EMAIL) {
      throw new Error('RESEND_CONTACT_EMAIL is not set');
    }

    // Parse request body
    const body = await request.json();

    // Validate form data
    const { isValid, errors } = validateFormData(body);

    if (!isValid) {
      return NextResponse.json(
        {
          details: errors,
          error: 'Validation failed',
        },
        { status: 400 },
      );
    }

    // Sanitize input data
    const formData: IContactFormData = {
      email: sanitizeInput(body.email),
      message: sanitizeInput(body.message),
      name: sanitizeInput(body.name),
    };

    // Initialize Resend and send email
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: 'ARYE Contact Form <onboarding@resend.dev>',
      react: createElement(ContactEmailTemplate, {
        email: formData.email,
        message: formData.message,
        name: formData.name,
      }),
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      to: [process.env.RESEND_CONTACT_EMAIL!],
    });

    if (error) {
      console.error('Resend error:', error);

      // Handle specific Resend errors
      if (error.message?.includes('API key')) {
        return NextResponse.json(
          { error: 'Email service configuration error' },
          { status: 500 },
        );
      }

      if (error.message?.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 },
        );
      }

      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 },
      );
    }

    // Log successful email for debugging
    console.log('Email sent successfully:', data?.id);

    return NextResponse.json({
      emailId: data?.id,
      message: 'Your message has been sent successfully!',
      success: true,
    });
  } catch (error) {
    console.error('Contact API error:', error);

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 },
    );
  }
}
