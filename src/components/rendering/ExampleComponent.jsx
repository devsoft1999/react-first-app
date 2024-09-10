import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // ใช้ useEffect เพื่อจำลอง componentDidMount และ componentDidUpdate
  useEffect(() => {
    console.log(`Component rendered! Count is: ${count}`);

    // Cleanup function เพื่อจำลอง componentWillUnmount
    return () => {
      console.log('Component will unmount or update');
    };
  }, [count]); // useEffect จะทำงานทุกครั้งที่ count เปลี่ยนแปลง

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};
export default ExampleComponent;