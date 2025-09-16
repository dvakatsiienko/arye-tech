/* Core */
import * as React from 'react';

/* Types */
interface IContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<IContactEmailTemplateProps> = ({
  name,
  email,
  message,
}) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333333',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: '#18181b',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
        }}>
        <h1 style={{ margin: '0', fontSize: '24px' }}>
          New Contact Form Submission
        </h1>
        <p style={{ margin: '5px 0 0 0', opacity: '0.8' }}>ARYE RCC-1</p>
      </div>

      {/* Content */}
      <div style={{ padding: '30px 20px' }}>
        {/* Contact Info */}
        <div
          style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
          }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#18181b' }}>
            Contact Information
          </h3>
          <p style={{ margin: '5px 0' }}>
            <strong>Name:</strong> {name}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Email:</strong>{' '}
            <a
              href={`mailto:${email}`}
              style={{ color: '#18181b', textDecoration: 'none' }}>
              {email}
            </a>
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Submitted:</strong> {currentDate}
          </p>
        </div>

        {/* Message */}
        <div>
          <h3 style={{ margin: '0 0 15px 0', color: '#18181b' }}>Message</h3>
          <div
            style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              whiteSpace: 'pre-wrap',
            }}>
            {message}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#6b7280',
        }}>
        <p style={{ margin: '0' }}>
          This email was sent from the ARYE RCC-1 contact form
        </p>
        <p style={{ margin: '5px 0 0 0' }}>
          Reply directly to this email to respond to {name}
        </p>
      </div>
    </div>
  );
};