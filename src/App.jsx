
import WelcomeMessage from './components/WelcomeMessage'; // นำเข้า Component
import './App.css'
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <WelcomeMessage name="New Nuttachai" /> {/* ส่งค่า prop name ไปที่ WelcomeMessage */}
      <Counter/> 
    </div>
  );
};
export default App;
