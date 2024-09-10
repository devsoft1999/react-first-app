import React, { useState } from 'react';

const HookCounter = () => {
  // ประกาศตัวแปร state ชื่อ 'count' และฟังก์ชัน setCount สำหรับอัปเดตค่า
  const [count, setCount] = useState(0); // กำหนดค่าเริ่มต้นเป็น 0

  // ฟังก์ชันสำหรับจัดการเมื่อปุ่มถูกคลิก
  const handleClick = () => {
    setCount(count + 1); // อัปเดตค่า count เพิ่มขึ้นทีละ 1
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default HookCounter;
