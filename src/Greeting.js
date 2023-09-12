import { GuestGreeting } from "./UserGreeting";
import { UserGreeting } from "./UserGreeting";
function Greeting(props) {

  //const isLoggedIn
  const isLoggedIn = (props.isLoggedIn);
  //const isLoggedIn=Boolean(false);
  // console.log("The value of fag is:"+isLoggedIn);
  if (isLoggedIn ==='false') {
    return <GuestGreeting />;
  }
    
    return <UserGreeting />;
}

export default Greeting;