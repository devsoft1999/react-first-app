
import React, { useRef, useState } from 'react';

const UseRefCounter = () => {
  const [count, setCount] = useState(0);
  const renders = useRef(0); // ใช้ useRef เพื่อเก็บค่าการ render

  renders.current++; // เพิ่มค่าการนับครั้งการ render ทุกครั้งที่คอมโพเนนต์ render

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>This component has rendered {renders.current} times.</p>
    </div>
  );
};

export default UseRefCounter;
