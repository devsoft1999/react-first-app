import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000); // อัปเดต seconds ทุกๆ 1 วินาที

    // Cleanup function: ยกเลิก interval เมื่อคอมโพเนนต์ unmount
    return () => clearInterval(interval);
  }, []); // ทำงานแค่ครั้งเดียวเมื่อ mount

  return <div>Seconds: {seconds}</div>;
};

export default Timer;
