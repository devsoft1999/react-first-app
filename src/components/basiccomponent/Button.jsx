import React from 'react';

const Button = ({ label, clickCount }) => {
  return <button>{label} (Clicked {clickCount} times)</button>;
};

export default Button;