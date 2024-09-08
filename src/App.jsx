
import WelcomeMessage from './components/WelcomeMessage'; // นำเข้า Component
import './App.css'
import Counter from './components/Counter';
import Greeting from './components/Greeting'; 

const App = () => {

  const userIsLoggedIn = true; // ตัวอย่างการกำหนดสถานะผู้ใช้

  return (
    <div>
      <WelcomeMessage name="New Nuttachai" /> {/* ส่งค่า prop name ไปที่ WelcomeMessage */}
      <Counter/> 
      <Greeting isLoggedIn={userIsLoggedIn} />;
    </div>
  );
};
export default App;
