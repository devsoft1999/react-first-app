
import WelcomeMessage from './components/WelcomeMessage'; // นำเข้า Component
import './App.css'
import Counter from './components/Counter';
import Greeting from './components/Greeting'; 
import WarningMessage from './components/WarningMessage';
const App = () => {

  const userIsLoggedIn = true; // ตัวอย่างการกำหนดสถานะผู้ใช้
  const name = "New Nuttachai";
  const showWarning = true;
  return (
    <div>
      <WelcomeMessage name={name} /> {/* ส่งค่า prop name ไปที่ WelcomeMessage */}
      <Counter/> 
      <WarningMessage showWarning={showWarning} />
      <Greeting isLoggedIn={userIsLoggedIn} />;
    </div>
  );
};
export default App;
