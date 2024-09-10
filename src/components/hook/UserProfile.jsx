import React, { useState } from 'react';

const UserProfile = () => {
  // ประกาศตัวแปร state หลายตัว
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)} // อัปเดตชื่อเมื่อผู้ใช้พิมพ์
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)} // อัปเดตอายุเมื่อผู้ใช้พิมพ์
      />
      <p>
        Hello, {name}! You are {age} years old.
      </p>
    </div>
  );
};

export default UserProfile;
