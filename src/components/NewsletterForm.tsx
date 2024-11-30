// NewsletterForm.tsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Add your API call here
      // Example:
      // await axios.post('/api/newsletter', { email });
      
      setMessage('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      setMessage('Error subscribing. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600/80 text-white rounded-lg hover:bg-indigo-700/80 transition-colors flex items-center gap-2 backdrop-blur-sm disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Notify Me'}
          <Send size={18} />
        </button>
      </form>
      {message && (
        <div className={`mt-2 text-sm ${message.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </div>
      )}
    </div>
  );
}