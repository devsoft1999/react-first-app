import React, { useState } from 'react';

// สร้าง HOC ที่รับ Component ใด ๆ มาเป็น parameter
const withClickTracker = (WrappedComponent) => {
  return (props) => {
    const [clickCount, setClickCount] = useState(0);

    // ฟังก์ชันที่ถูกเรียกเมื่อมีการคลิก
    const handleClick = () => {
      setClickCount(clickCount + 1);
    };

    // Return Component ใหม่พร้อม prop เพิ่มเติม
    return (
      <div onClick={handleClick}>
        <WrappedComponent clickCount={clickCount} {...props} />
        <p>Clicked {clickCount} times</p>
      </div>
    );
  };
};
export default withClickTracker;