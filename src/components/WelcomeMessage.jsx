import React from 'react';

// สร้าง Functional Component ที่รับ props เป็นพารามิเตอร์
const WelcomeMessage = (props) => {
  return <h1>Hello, {props.name}!</h1>; // ใช้ prop ที่ได้รับมาเพื่อแสดงผล
};

export default WelcomeMessage;
