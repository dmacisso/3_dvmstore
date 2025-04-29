'use client';

import { useState } from 'react';

export default function EmailInput() {
  const [email, setEmail] = useState('');

  async function handleAddSubscriber() {
    try {

      // add email.includes("@") and/or possibly some other email validation code
      // write the post fetch request to send off the email to your email service provider.
    } catch (err) {
      console.log('Failed to add subscriber! ', err.message);
    }
  }

  return (
    <div className="sign-up">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email address..."
      />
      <button onClick={handleAddSubscriber} className="button-card">
        Sign Up
      </button>
    </div>
  );
}
