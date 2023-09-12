import './App.css';
import Navbar from './navbar';
import Display from './display';
import About from './components/about';
import Form from './components/form';
import Home from './components/home';
import Greeting from './Greeting';
import Image from './image'
import Welcome from './welcome'


function App() {
  const name="John";
  const marks=32;
  return (
    <div className="App">
      {/* september 7 */}

      <h1>Enjoy React {name}</h1>
      <h1 className='marks'>Marks of {name} is {marks}</h1>
      <Navbar/>

  {/* september 8 */}
      <div className='container1'>
     <Form/>
     </div>


     {/*september 11 demo */}
     <div className='container'>
        <div className='innercontainer'>
      <Welcome name="John" age="34" salary="14200 "/>
      <Image className="images" link="https://cdn.pixabay.com/photo/2023/08/28/23/17/superb-fairywren-8220199_1280.jpg" height="400px"/>
      
      </div>
      </div>
      {/* september 11 conditionals */}
      <div className='app'>
      <Greeting isLoggedIn='false'></Greeting>;
      </div>


    </div>
      

  );
}


export default App;
