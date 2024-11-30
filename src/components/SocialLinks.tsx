import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      <a
        href="#"
        className="text-gray-400 hover:text-indigo-400 transition-colors"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-indigo-400 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={24} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-indigo-400 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
}