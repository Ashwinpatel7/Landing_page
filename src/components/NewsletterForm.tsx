import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-indigo-600/80 text-white rounded-lg hover:bg-indigo-700/80 transition-colors flex items-center gap-2 backdrop-blur-sm"
      >
        Notify Me
        <Send size={18} />
      </button>
    </form>
  );
}