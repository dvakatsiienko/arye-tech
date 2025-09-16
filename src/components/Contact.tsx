'use client';

import { useState } from 'react';

import { SectionHeading } from './SectionHeading';

/* Types */
interface IFormData {
  name: string;
  email: string;
  message: string;
}

interface IFormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const Contact = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    message: '',
    name: '',
  });

  const [formState, setFormState] = useState<IFormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formState.error) {
      setFormState((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset form state
    setFormState({
      isLoading: true,
      isSuccess: false,
      error: null,
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Success
      setFormState({
        isLoading: false,
        isSuccess: true,
        error: null,
      });

      // Reset form data
      setFormData({ email: '', message: '', name: '' });

      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSuccess: false }));
      }, 5000);

    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : 'Failed to send message',
      });
    }
  };

  return (
    <section className='py-20 px-6 md:px-10' id='contact'>
      <div className='max-w-2xl mx-auto'>
        <SectionHeading text='Questions? Get in Touch' />

        <p className='text-lg text-zinc-600 mb-10'>
          Have questions about RCC-1 or need bulk orders? We&apos;re here to
          help.
        </p>

        <form className='space-y-6 text-left' onSubmit={handleSubmit}>
          {/* Success Message */}
          {formState.isSuccess && (
            <div className='bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg'>
              <p className='font-medium'>✅ Message sent successfully!</p>
              <p className='text-sm'>We'll get back to you soon.</p>
            </div>
          )}

          {/* Error Message */}
          {formState.error && (
            <div className='bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg'>
              <p className='font-medium'>❌ {formState.error}</p>
              <p className='text-sm'>Please try again.</p>
            </div>
          )}

          <div>
            <label className='block text-sm text-zinc-600 mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className={`w-full px-4 py-3 bg-white border rounded-lg text-foreground placeholder-zinc-400 focus:outline-none focus:ring-1 transition-colors duration-300 ${
                formState.error
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-zinc-200 focus:border-zinc-900 focus:ring-zinc-900'
              }`}
              disabled={formState.isLoading}
              id='name'
              name='name'
              onChange={handleInputChange}
              placeholder='Your name'
              required
              type='text'
              value={formData.name}
            />
          </div>

          <div>
            <label className='block text-sm text-zinc-600 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className={`w-full px-4 py-3 bg-white border rounded-lg text-foreground placeholder-zinc-400 focus:outline-none focus:ring-1 transition-colors duration-300 ${
                formState.error
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-zinc-200 focus:border-zinc-900 focus:ring-zinc-900'
              }`}
              disabled={formState.isLoading}
              id='email'
              name='email'
              onChange={handleInputChange}
              placeholder='your@email.com'
              required
              type='email'
              value={formData.email}
            />
          </div>

          <div>
            <label
              className='block text-sm text-zinc-600 mb-2'
              htmlFor='message'>
              Message
            </label>
            <textarea
              className={`w-full px-4 py-3 bg-white border rounded-lg text-foreground placeholder-zinc-400 focus:outline-none focus:ring-1 transition-colors duration-300 resize-vertical ${
                formState.error
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-zinc-200 focus:border-zinc-900 focus:ring-zinc-900'
              }`}
              disabled={formState.isLoading}
              id='message'
              name='message'
              onChange={handleInputChange}
              placeholder='How can we help?'
              required
              rows={4}
              value={formData.message}
            />
          </div>

          <button
            className={`w-full font-bold py-4 px-8 rounded-lg border shadow-sm transition-all duration-300 text-lg flex items-center justify-center gap-2 ${
              formState.isLoading
                ? 'bg-zinc-400 border-zinc-400 text-white cursor-not-allowed'
                : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-900 text-white hover:-translate-y-1'
            }`}
            disabled={formState.isLoading}
            type='submit'>
            {formState.isLoading ? (
              <>
                <LoadingSpinner />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

/* Helpers */
const LoadingSpinner = () => (
  <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
);
