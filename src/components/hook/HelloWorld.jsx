import React, { useEffect } from 'react';

const HelloWorld = () => {
  useEffect(() => {
    console.log('Hello, World!'); // พิมพ์ "Hello, World!" เมื่อคอมโพเนนต์ mount
  }, []); // ใช้ dependency array ว่างเพื่อให้ useEffect ทำงานแค่ครั้งเดียวเมื่อ mount

  return <div>Hello, World!</div>;
};

export default HelloWorld;
