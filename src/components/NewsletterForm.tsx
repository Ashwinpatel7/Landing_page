// src/components/NewsletterForm.tsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios'; // Make sure to install axios: npm install axios

interface NewsletterResponse {
  success: boolean;
  message: string;
}

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      // Replace with your actual API endpoint
      const response = await axios.post<NewsletterResponse>('/api/newsletter', {
        email,
      });

      if (response.data.success) {
        setStatus('success');
        setMessage('Successfully subscribed! Thank you for joining.');
        setEmail('');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error 
          ? error.message 
          : 'Error subscribing. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md" role="form" aria-label="Newsletter subscription">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`
              w-full px-4 py-2 rounded-lg 
              bg-gray-900/50 border 
              ${status === 'error' ? 'border-red-500' : 'border-gray-700'}
              text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 
              focus:ring-indigo-500 focus:border-transparent 
              backdrop-blur-sm
            `}
            required
            disabled={isLoading}
            aria-label="Email input"
          />
          {status === 'error' && (
            <div className="absolute -bottom-6 left-0 text-xs text-red-400">
              {message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className={`
            px-6 py-2 bg-indigo-600/80 text-white 
            rounded-lg hover:bg-indigo-700/80 
            transition-colors flex items-center 
            justify-center gap-2 backdrop-blur-sm
            disabled:opacity-50 disabled:cursor-not-allowed
            min-w-[140px]
          `}
          disabled={isLoading}
          aria-label="Subscribe button"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <span>Notify Me</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>

      {/* Success Message */}
      {status === 'success' && (
        <div 
          className="mt-4 p-3 rounded-lg bg-green-500/20 text-green-400 text-sm"
          role="alert"
        >
          {message}
        </div>
      )}
    </div>
  );
}

// Optional: Create a types file (src/types/newsletter.ts)
export interface NewsletterFormProps {
  onSuccess?: (email: string) => void;
  onError?: (error: string) => void;
}