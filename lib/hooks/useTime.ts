import { useEffect, useState } from "react";

export function useTime(interval = 1000) {
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().getTime());
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  return time;
}
