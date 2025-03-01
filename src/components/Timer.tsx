import React, { useEffect, useState } from 'react';
 
interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}
 
export const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
 
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
 
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
 
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);
 
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
 
  return (
    <div className="h5 fw-bold text-danger">
      Time Left: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};