
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
const App = () => {

  const userIsLoggedIn = true; // ตัวอย่างการกำหนดสถานะผู้ใช้
  const name = "New Nuttachai";
  const showWarning = true;

  const TrackedButton = withClickTracker (Button);



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
      <TrackedButton label="Click me!" />
    </div>
  );
};
export default App;
