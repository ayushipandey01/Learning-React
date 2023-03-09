import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import Spinner from '../Common/Spinner/Spinner';

let auth = true;

function LoginForm(props){

  const {onLoginSuccessful} = props;
  
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [isLoading , setIsLoading] = useState(false);
  const [showError , setShowError] = useState(false);

  function updateEmail(e){
      var _email = e.target.value;
      setEmail(_email);
      // this.setState({email : email});
      // e.target.value ="";
      // console.log(email);
  }

  function updatePassword(e){
      var _password = e.target.value;
      setPassword(_password);
      // this.setState({password : password});
      // console.log(password);
  }

  function onLogin(email,password){
      setIsLoading(true);
      // this.setState({isLoading : true});
      setTimeout(()=>{  
        if(auth){
          onLoginSuccessful();
        }    
        else{
          setShowError(true);
          // this.setState({showError : true});
        }     
      // this.setState({isLoading : false});
      setIsLoading(false);
      },3000)                    
  }

  return (          
    <Form className='loginForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange = {(e)=> updateEmail(e)} value = {email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange = {(e) => {updatePassword(e)}}value = {password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {
        isLoading ? <Spinner /> : <Button onClick = {() => {onLogin(email,password)}} variant="primary">
        Submit
      </Button>
      }
      {
        showError && <p style={{color : "red"}}>Invalid Credentials</p>
      }
      
    </Form>
  );

}

// class LoginForm extends React.Component {
//     constructor(){
//         super();
//         this.state = {email : "" , password: "" , isLoading : false , showError : false};
//     }

//     updateEmail(e){
//         var email = e.target.value;
//         this.setState({email : email});
//         // e.target.value ="";
//         // console.log(email);
//     }

//     updatePassword(e){
//         var password = e.target.value;
//         this.setState({password : password});
//         // console.log(password);
//     }

//     // onSubmit(){
//     //     console.log({email : this.state.email , password : this.state.password});
//     // }

//     onLogin(email,password){
//         this.setState({isLoading : true});
//         setTimeout(()=>{  
//           if(auth){
//             this.props.onLoginSuccessful();
//           }    
//           else{
//             this.setState({showError : true});
//           }     
//         this.setState({isLoading : false});
//         },3000)                    
//     }

//     render(){
//       // console.log(this.props);
//         return (          
//             <Form className='loginForm'>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control onChange = {(e)=> this.updateEmail(e)} value = {this.state.email} type="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                   We'll never share your email with anyone else.
//                 </Form.Text>
//               </Form.Group>
        
//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control onChange = {(e) => {this.updatePassword(e)}}value = {this.state.password} type="password" placeholder="Password" />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//               </Form.Group>
//               {
//                 this.state.isLoading ? <Spinner /> : <Button onClick = {() => {this.onLogin(this.state.email,this.state.password)}} variant="primary">
//                 Submit
//               </Button>
//               }
//               {
//                 this.state.showError && <p style={{color : "red"}}>Invalid Credentials</p>
//               }
              
//             </Form>
//           );
//     }
// }

export default LoginForm;