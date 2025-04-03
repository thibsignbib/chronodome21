'use client';

import { useEffect, useState } from 'react';
import './FlipdownTimer.css';

const FlipdownTimer = () => {
  const targetDate = new Date('2025-06-07T19:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) return;

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((distance / 1000 / 60) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flipdown-timer">
      {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
        <div key={unit} className="flipdown-unit">
          <div className="flipdown-label">{unit.toUpperCase()}</div>
          <div className="flipdown-digits">
            {timeLeft[unit as keyof typeof timeLeft].split('').map((char, i) => (
              <div key={i} className="flipdown-digit">
                <span className="flip">{char}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipdownTimer;
