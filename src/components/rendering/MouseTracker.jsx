import React from 'react';

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/* เรียกใช้ฟังก์ชันที่ถูกส่งมาผ่าน props เพื่อ Render UI */}
        {this.props.test(this.state)}
      </div>
    );
  }
}

// Component ที่ใช้ MouseTracker
export default MouseTracker;
