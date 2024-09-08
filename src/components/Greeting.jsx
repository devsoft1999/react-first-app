import UserGreeting from './UserGreeting';
import GuestGreeting from './GurestGreeting';
const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      
      return <UserGreeting />;
    } else {
      return <GuestGreeting />;
    }
};

export default Greeting;

