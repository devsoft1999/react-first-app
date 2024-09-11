import React, { useReducer } from 'react';

// กำหนด reducer function สำหรับการจัดการ state
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }; // เพิ่มค่า count
    case 'decrement':
      return { count: state.count - 1 }; // ลดค่า count
    default:
      return state; // คืนค่า state ปัจจุบัน
  }
};

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // ใช้ useReducer แทน useState

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
};

export default UseReducerCounter;
