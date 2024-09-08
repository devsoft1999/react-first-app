import React, { useState } from 'react';

const Counter = () => {
  // สร้าง state ชื่อ count พร้อมกับฟังก์ชัน setCount สำหรับเปลี่ยนแปลงค่า
  const [count, setCount] = useState(0);

  // ฟังก์ชันสำหรับเพิ่มค่าของ count
  const incrementCount = () => {
    setCount(count + 1); // อัพเดท state
  };

  return (
    <div>
      <h2>Count: {count}</h2> {/* แสดงผลค่า state */}
      <button onClick={incrementCount}>Increase Count</button> {/* ปุ่มที่เรียกฟังก์ชัน incrementCount */}
    </div>
  );
};

export default Counter;
