import React, { useState } from 'react';

const ComplexState = () => {
  const [user, setUser] = useState({ name: '', age: 0 }); // ประกาศ state ที่เป็น object

  const updateName = (e) => {
    setUser({ ...user, name: e.target.value }); // อัปเดตเฉพาะชื่อใน object โดยใช้ spread operator
  };

  const updateAge = (e) => {
    setUser({ ...user, age: e.target.value }); // อัปเดตเฉพาะอายุใน object โดยใช้ spread operator
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={user.name}
        onChange={updateName}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={user.age}
        onChange={updateAge}
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
};

export default ComplexState;
