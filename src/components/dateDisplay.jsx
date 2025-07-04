import React, { useEffect, useState } from "react";
import "./dateDisplay.less";

function DateDisplayBox() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}.${m}.${d}`;
  };

  const formatTime = (date) => {
    const h = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");
    return `${h}:${min}:${s}`;
  };

  const getDaysPassed = () => {
    const startDate = new Date("2025-05-10");
    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = now.setHours(0, 0, 0, 0) - startDate.setHours(0, 0, 0, 0);
    return Math.max(0, Math.floor(diff / msPerDay));
  };

  return (
    <div className="date-display">
      <div className="label">📍 Start Date</div>
      <div className="value">2025.05.10</div>

      <div className="label">📆 Current Date</div>
      <div className="value">{formatDate(now)}</div>

      <div className="label">⏱️ Current Time</div>
      <div className="value">{formatTime(now)}</div>

      <div className="label">📅 Days Passed</div>
      <div className="value">{getDaysPassed()} days</div>
    </div>
  );
}

export default DateDisplayBox;
