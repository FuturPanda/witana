import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="clock flex gap-2">
      <span>{date.toLocaleDateString()}</span>
      <span>{date.toLocaleTimeString()}</span>
    </div>
  );
};

export default Clock;
