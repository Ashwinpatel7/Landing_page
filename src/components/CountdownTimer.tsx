import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const launchDate = new Date('2024-12-31').getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-8 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col">
          <span className="text-4xl font-bold text-indigo-600">{value}</span>
          <span className="text-sm uppercase tracking-wider text-gray-600">{key}</span>
        </div>
      ))}
    </div>
  );
}