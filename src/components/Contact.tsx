'use client';

import type React from 'react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact' className='py-20 px-6 md:px-10'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent'>
          Questions? Get in Touch
        </h2>

        <p className='text-lg text-zinc-600 mb-10'>
          Have questions about RCC-1 or need bulk orders? We&apos;re here to
          help.
        </p>

        <form onSubmit={handleSubmit} className='space-y-6 text-left'>
          <div>
            <label htmlFor='name' className='block text-sm text-zinc-600 mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Your name'
              required
              className='w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-foreground placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors duration-300'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm text-zinc-600 mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='your@email.com'
              required
              className='w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-foreground placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors duration-300'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm text-zinc-600 mb-2'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              placeholder='How can we help?'
              rows={4}
              required
              className='w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-foreground placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-colors duration-300 resize-vertical'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 px-8 rounded-lg border border-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 text-lg'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
