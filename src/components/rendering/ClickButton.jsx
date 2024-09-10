import React from 'react';

const ClickButton = () => {
  // ฟังก์ชันที่ถูกเรียกเมื่อมีการคลิกปุ่ม
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me!</button>
  );
};

export default ClickButton;
