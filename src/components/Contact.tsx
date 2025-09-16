'use client';

import { useState } from 'react';

import { SectionHeading } from './SectionHeading';

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    name: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ email: '', message: '', name: '' });
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
          <div>
            <label className='block text-sm text-zinc-600 mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-foreground placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors duration-300'
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
              className='w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-foreground placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors duration-300'
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
              className='w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-foreground placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors duration-300 resize-vertical'
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
            className='w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 px-8 rounded-lg border border-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 text-lg'
            type='submit'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
