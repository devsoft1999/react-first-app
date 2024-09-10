import React, {  useEffect,useRef, useState } from 'react';

const RefCounter = () => {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(count); // สร้าง Ref เพื่อเก็บค่าก่อนหน้า

  useEffect(() => {
    // เก็บค่าปัจจุบันลงใน Ref หลังจากที่ Render เสร็จ
    previousCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h1>Current count: {count}</h1>
      <h2>Previous count: {previousCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default RefCounter;
