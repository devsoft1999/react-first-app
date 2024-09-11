import React, { useRef } from 'react';

const FieldTextInputFocus = () => {
  const inputRef = useRef(null); // สร้าง reference สำหรับ input element

  const handleFocus = () => {
    inputRef.current.focus(); // ใช้ reference เพื่อเข้าถึง input และเรียกใช้ฟังก์ชัน focus
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default FieldTextInputFocus;
