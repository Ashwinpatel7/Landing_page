import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      <a
        href="https://github.com/ashwinpatel7"
        className="text-gray-400 hover:text-indigo-400 transition-colors"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="https://x.com/AshwinP51434622"
        className="text-gray-400 hover:text-indigo-400 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ashwin-patel-936964228/"
        className="text-gray-400 hover:text-indigo-400 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
}