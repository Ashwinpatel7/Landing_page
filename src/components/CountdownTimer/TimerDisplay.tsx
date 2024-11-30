// TimerDisplay.tsx
import React from 'react';
import { TimeUnit } from './TimeUnit';

interface TimerDisplayProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function TimerDisplay({ timeLeft }: TimerDisplayProps) {
  return (
    <div className="relative">
      <div className="flex gap-4 md:gap-8 justify-center">
        <TimeUnit value={timeLeft.days} label="days" />
        <TimeUnit value={timeLeft.hours} label="hours" />
        <TimeUnit value={timeLeft.minutes} label="minutes" />
        <TimeUnit value={timeLeft.seconds} label="seconds" />
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 blur-3xl" />
        </div>
      </div>
    </div>
  );
}