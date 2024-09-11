import React, { useReducer } from 'react';

// กำหนด reducer function สำหรับการจัดการ state ของฟอร์ม
const formReducer = (state, action) => {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action.field]: action.value
      }; // อัพเดตฟิลด์ที่ระบุ
    default:
      return state; // คืนค่า state ปัจจุบัน
  }
};

const Form = () => {
  const [formState, dispatch] = useReducer(formReducer, { name: '', email: '' }); // กำหนด state เริ่มต้น

  const handleChange = (e) => {
    dispatch({ type: 'updateField', field: e.target.name, value: e.target.value }); // ส่ง action เพื่ออัพเดตฟิลด์ที่ถูกแก้ไข
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
