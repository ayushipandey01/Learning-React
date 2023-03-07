import './App.css';
import Users from './components/Users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginComponent/LoginForm';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {isLoggedIn : true};
  }

  onLoginSuccessful(email , password){
    // console.log(email , password);
    this.setState({isLoggedIn : true});
  }

  render(){
    return (
      <div>
        {/* <Users/> */}
        {
          this.state.isLoggedIn ? <Users /> : <LoginForm onLoginSuccessful = {this.onLoginSuccessful.bind(this)}/>
        }
        
      </div>    
    );
  }
}


export default App;
