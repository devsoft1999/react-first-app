import React, { useState, useEffect } from 'react';

import WelcomeMessage from './components/basiccomponent/WelcomeMessage'; // นำเข้า Component
import './App.css'
import Counter from './components/basiccomponent/Counter';
import Greeting from './components/basiccomponent/Greeting'; 
import WarningMessage from './components/basiccomponent/WarningMessage';
import WelcomeDialog from './components/basiccomponent/WelcomeDialog';
import ExampleComponent from './components/rendering/ExampleComponent';
import FruitList from './components/rendering/FruitList';
import UserList from './components/rendering/UserList';
import MouseTracker from './components/rendering/MouseTracker';
import InputFocus from './components/rendering/InputFocus';
import CallbackRefExample from './components/rendering/CallBackRefExample';
import RefCounter from './components/rendering/RefCounter';
import ClickButton from './components/rendering/ClickButton';
import withClickTracker from './components/rendering/hoc/withClickTracker';
import Button from './components/basiccomponent/Button';
import HookCounter from './components/hook/HookCounter';
import UserProfile from './components/hook/UserProfile';
import ComplexState from './components/hook/ComplexState';
import HelloWorld from './components/hook/HelloWorld';
import Timer from './components/hook/Timer';
import UserComponent from './components/hook/UserComponent';
import UseRefCounter from './components/hook/UseRefCounter';
import FieldTextInputFocus from './components/hook/FieldTextInputFocus';
import UseReducerCounter from './components/hook/UseReducerCounter';
import Form from './components/hook/Form';
const App = () => {

  const userIsLoggedIn = true; // ตัวอย่างการกำหนดสถานะผู้ใช้
  const name = "New Nuttachai";
  const showWarning = true;

  const TrackedButton = withClickTracker (Button);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component re-rendered!');
  }); // ไม่มี dependency array, จะทำงานทุกครั้งที่ render

  return (
    <div>
      {/* <WelcomeMessage name={name} /> ส่งค่า prop name ไปที่ WelcomeMessage */}
      {/* <Counter/>  */}
      {/* <WarningMessage showWarning={showWarning} /> */}
      {/* <Greeting isLoggedIn={userIsLoggedIn} />; */}
     {/* <WelcomeDialog/> */}
     {/* <ExampleComponent/> */}
     {/* <FruitList/> */}
     {/* <UserList/> */}
     {/* <MouseTracker  test={({ x, y }) => (
        <h1>
          Mouse position: ({x}, {y})
        </h1>
      )}></MouseTracker> */}
      {/* <InputFocus/> */}
      {/* <CallbackRefExample/> */}
      {/* <RefCounter/> */}
      {/* <ClickButton/> */}
      {/* <TrackedButton label="Click me!" /> */}
      {/* <HookCounter/> */}
      {/* <UserProfile/> */}
      {/* <ComplexState/> */}
      {/* <HelloWorld/> */}
      {/* <Timer/> */}
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
      {/* <UserComponent/> */}
      {/* <UseRefCounter/> */}
      {/* <FieldTextInputFocus/> */}
      {/* <UseReducerCounter/> */}
      {/* <Form/> */}
    </div>
  );
};
export default App;
