import React from 'react';

interface TimeUnitProps {
  value: number;
  label: string;
}

export function TimeUnit({ value, label }: TimeUnitProps) {
  const formattedValue = value.toString().padStart(2, '0');
  
  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-lg p-4 backdrop-blur-sm bg-opacity-80 border border-gray-700 shadow-lg">
        <div className="relative">
          {/* Digital display effect */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-20">
              <div className="bg-black/30 absolute inset-0 rounded" />
              <div className="relative z-10">
                <div className="font-mono text-4xl font-bold bg-gradient-to-b from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                  {formattedValue}
                </div>
              </div>
              {/* Reflection effect */}
              <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-b from-white/10 to-transparent rounded-b" />
            </div>
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              {label}
            </div>
          </div>
        </div>
        
        {/* Technical decorative elements */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
}