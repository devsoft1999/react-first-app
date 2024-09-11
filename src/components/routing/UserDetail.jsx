// UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams(); // ดึงพารามิเตอร์ id ออกมา

  return <h1>User Detail for User {id}</h1>;
};

export default UserDetail;
