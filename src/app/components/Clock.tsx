"use client";
import { useState, useEffect } from "react" ;

export default function Clock () {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

  return () => clearInterval(timer);
  }, []);

  return(
    <>
      <p>現在時刻 {now.toLocaleTimeString()}</p>
    </>
  );
}