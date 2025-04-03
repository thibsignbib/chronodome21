'use client';
import { useEffect, useState } from 'react';
import styles from './countdown.module.css'; // si tu veux un style propre

export default function Countdown() {
  const targetDate = new Date('2025-06-07T19:00:00'); // 🕒 adapte la date de ton événement !
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.countdownContainer}>
      <h2>⏳ Début dans :</h2>
      <div className={styles.timer}>
        <div><span>{timeLeft.days}</span>J</div>
        <div><span>{timeLeft.hours}</span>H</div>
        <div><span>{timeLeft.minutes}</span>Min</div>
        <div><span>{timeLeft.seconds}</span>Sec</div>
      </div>
    </div>
  );
}
