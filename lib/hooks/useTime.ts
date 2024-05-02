import { useEffect, useState } from "react";

export function useTime(interval = 1000) {
  const [time, setTime] = useState(new Date().getTime());
  const [startRunning, setStartRunning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().getTime());
    }, interval);
    if (!startRunning) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [interval, startRunning]);

  return [time, setStartRunning] as const;
}
