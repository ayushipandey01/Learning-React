import './App.css';
import Users from './components/Users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginComponent/LoginForm';
import React , { useState , useEffect } from 'react';
import UserModal from './components/User/UserModal/userModal';

function App (){

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  function onLoginSuccessful(email , password){
    // console.log(email , password);
    // this.setState({isLoggedIn : true});
    setIsLoggedIn(true);
  }

  return (      
    <div>
      {/* <Users/> */}
      {
        isLoggedIn ? <Users /> : <LoginForm onLoginSuccessful = {onLoginSuccessful}/>
      }    
    </div>    
  );
}

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {isLoggedIn : false};
//   } 

//   onLoginSuccessful(email , password){
//     // console.log(email , password);
//     this.setState({isLoggedIn : true});
//   }

//   render(){
//     return (
      
//       <div>
//         {/* <Users/> */}
//         {
//           this.state.isLoggedIn ? <Users /> : <LoginForm onLoginSuccessful = {this.onLoginSuccessful.bind(this)}/>
//         }     
           
        
//       </div>    
//     );
//   }
// }

// function App(){
//   //Array destructuring
//   const [count , setCount] = useState(0);
//   const [theme , setTheme] = useState("red");
//   const [windowWidth , setWindowWidth] = useState(window.innerWidth);

//   function onIncrement(){
//     // setCount(count+1);
//     setCount(next => next+1);
//     setTheme("blue");
//   }

//   function onDecrement(){
//     // setCount(count-1);
//     setCount(prev => prev - 1);
//     setTheme("red");
//   }

//   function updateWindowWidth(){
//     setWindowWidth(window.innerWidth);
//   }

//   //it does both mounting and udating together and unmounting also
//   useEffect(()=>{
//     console.log("component is updating");
//     document.title = `You clicked ${count} times`;

//     window.addEventListener('resize' , updateWindowWidth);

//     return ()=> {
//       // console.log("this is my clean up done.");
//       window.removeEventListener('resize' , updateWindowWidth);
//     }
//   });

//   return (      
//     <div>
//       <p>Window width : {windowWidth}</p>
//       <button onClick={onDecrement}className='button'>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={onIncrement}className='button'>+</button>
//     </div>
//   )
// }

export default App;
