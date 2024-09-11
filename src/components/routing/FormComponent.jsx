import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // ทำบางอย่าง แล้วนำทางไปหน้าอื่น
    navigate('/dashboard');
  };

  return (
    <button onClick={handleSubmit}>Submit</button>
  );
};

export default FormComponent;
