import React from "react";
function UserGreeting() {
    return (
    <>
      <h1> Logged in as new User</h1>
      <h1>Please sign up.</h1>
    </>
             );
  }
  function GuestGreeting() {
    return (
      <>
  
        <h1> Logged in as Guest User</h1>
        <h1>WELCOME</h1>
  
      </>
    );
  }
  export { UserGreeting, GuestGreeting };