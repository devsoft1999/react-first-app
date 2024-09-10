import React, { Component } from 'react';

class CallbackRefExample extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null; // เก็บค่า Ref ไว้
  }

  setInputRef = (element) => {
    this.inputRef = element;
  };

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  render() {
    return <input type="text" ref={this.setInputRef} />;
  }
}

export default CallbackRefExample;