// import React, { Component } from 'react';

// class InputFocus extends Component {
//   constructor(props) {
//     super(props);
//     // สร้าง Ref ด้วย React.createRef()
//     this.inputRef = React.createRef();
//   }

//   componentDidMount() {
//     // การใช้ Refs เพื่อโฟกัสที่อินพุตทันทีเมื่อ Component ถูก Mount
//     this.inputRef.current.focus();
//   }

//   render() {
//     return <input type="text" ref={this.inputRef} />;
//   }
// }

// export default InputFocus;

import React, { useRef, useEffect } from 'react';

const InputFocus = () => {
  const inputRef = useRef(null); // สร้าง Ref ด้วย useRef

  useEffect(() => {
    // ใช้ Refs เพื่อโฟกัสที่อินพุตทันทีเมื่อ Component ถูก Mount
    inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
};

export default InputFocus;
