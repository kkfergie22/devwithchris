'use client';
import { useState, useEffect } from 'react';

export default function TimeCard() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    };

    updateTime();

    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="font-semibold text-brand">{time}</div>;
}
