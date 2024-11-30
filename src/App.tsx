import React from 'react';
import { Rocket } from 'lucide-react';
import { CountdownTimer } from './components/CountdownTimer';
import { NewsletterForm } from './components/NewsletterForm';
import { SocialLinks } from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-5" />
      
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full space-y-12 text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-indigo-600/20 p-3 rounded-full border border-indigo-500/30 backdrop-blur-sm">
                <Rocket size={32} className="text-indigo-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white">
              Something Amazing is Coming Soon
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're working hard to bring you something extraordinary. Stay tuned for the big reveal and be the first to know when we launch.
            </p>
          </div>

          <CountdownTimer />

          <div className="space-y-4">
            <p className="text-gray-400">
              Get notified when we launch:
            </p>
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
          </div>

          <div className="pt-8">
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;