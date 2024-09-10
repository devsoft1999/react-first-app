import React, { useState, useEffect } from 'react';

const UserComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log('Name has changed:', name);
  }, [name]); // ทำงานเมื่อ name เปลี่ยนแปลง

  useEffect(() => {
    console.log('Age has changed:', age);
  }, [age]); // ทำงานเมื่อ age เปลี่ยนแปลง

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
};

export default UserComponent;
