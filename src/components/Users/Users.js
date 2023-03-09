import React , { useEffect , useState , useRef } from "react";
import User from "../User/User";
import './Users.css';
import Spinner from '../Common/Spinner/Spinner';
import UserModal from "../User/UserModal/userModal";

function Users (){

    var completeData = useRef(null);

    var id = useRef(null);
    
    const [isLoading , setIsLoading] = useState(false);
    const [usersData , setUsersData] = useState([]);
    const [searchValue , setSearchValue] = useState("");
    const [showModal , setShowModal ] = useState(false);

    function showSpinner(){
        return(
            <Spinner />
        )
    }

    function showUsers(){
        return (
            <div>
                <h2>This is Users components</h2>

                <div className="inputText">
                    <input onChange = {(e)=> filterUsers(e)} value = {searchValue} type="text" placeholder ="Type a Name....."></input>
                </div>                

                <div className="cardStyle">            
                {
                    usersData.map((data) => {
                        return (
                            <User key = {data.id} details = {data} openModal = {openModal}/>
                        )
                    })             
                }            
                </div>
            </div>            
        )
    }

    function filterUsers(e){
        const userText = e.target.value.toLowerCase();
        setSearchValue(userText);
        
        const fileteredUsers = completeData.current.filter((data)=> {
            return data.firstName.toLowerCase().startsWith(userText);
            
        })
        setUsersData(fileteredUsers);
        // this.setState({usersData : fileteredUsers});
    }

    function openModal(_id){
        id.current = _id;
        setShowModal(true);
        // this.setState({showModal : true});
    }

    function closeModal(){
        setShowModal(false);
        // this.setState({showModal : false});
    }

    useEffect(()=> {
        fetch('https://dummyjson.com/users/')
        .then(res => res.json())
        .then(users => {
            // console.log(users);
            completeData.current = users.users;
            setIsLoading(false);
            setUsersData(users.users);
            // this.setState({isLoading : false , usersData : users.users})            
        });
    },[])

    return(
        <div>        
        {
            // Conditional Rendering
            isLoading ? showSpinner() : showUsers()
        } 

        {
            showModal && <UserModal id = {id.current} closeModal = {closeModal}/> 
        }             
        </div>        
    )

}

// class Users extends React.Component {
//     constructor(){
//         super(); 
//         this.state = {currentValue : 0 , isLoading : true , usersData : [] , searchValue : "" , showModal : false};
//     }

//     // incrementCounter(){
//     //     console.log("clicked!!!")
//     //     this.setState({currentValue : this.state.currentValue+1});
//     // };

//     componentWillMount(){
//         // console.log("Component will mount");
//     }

//     componentDidMount(){
//         // console.log("Component did mount.");

//         // setTimeout(() =>
//         // {
//         //     this.setState({isLoading : false})
//         // } , 5000)

//         fetch('https://dummyjson.com/users/')
//         .then(res => res.json())
//         .then(users => {
//             // console.log(users);
//             this.completeData = users.users;
//             this.setState({isLoading : false , usersData : users.users})            
//         })
//     }

//     showSpinner(){
//         return(
//             <Spinner />
//         )
//     }

//     filterUsers(e){
//         const userText = e.target.value.toLowerCase();
//         // console.log(userText);
//         this.setState({searchValue : userText});
        
//         // console.log(this.completeData);
//         const fileteredUsers = this.completeData.filter((data)=> {
//             return data.firstName.toLowerCase().startsWith(userText);
            
//         })

//         // console.log(fileteredUsers);

//         this.setState({usersData : fileteredUsers});
//     }

//     openModal(id){
//         this.id = id;
//         this.setState({showModal : true});
//     }

//     closeModal(){
//         this.setState({showModal : false});
//     }

//     showUsers(){
//         return (
//             <div>
//                 <h2>This is Users components</h2>

//                 <div className="inputText">
//                     <input onChange = {(e)=> this.filterUsers(e)} value = {this.state.searchValue} type="text" placeholder ="Type a Name....."></input>
//                 </div>                

//                 <div className="cardStyle">            
//                 {
//                     this.state.usersData.map((data) => {
//                         return (
//                             <User key = {data.id} details = {data} openModal = {this.openModal.bind(this)}/>
//                         )
//                     })             
//                 }            
//                 </div>
//             </div>            
//         )
//     }

//     render(){
//         // console.log("Rendered");
//         return(
//             <div>

               
                
//                 {/* <div className="button">
//                     <p>current value : {this.state.currentValue}</p>
//                     <button onClick={()=> this.incrementCounter()
//                     }>Increment Counter</button>
//                 </div> */}

            
//             {
//                 // Conditional Rendering
//                 this.state.isLoading ? this.showSpinner() : this.showUsers()
//             } 


//             {
//                 this.state.showModal && <UserModal id = {this.id} closeModal = {this.closeModal.bind(this)}/> 
//             } 

                
//             </div>        
//         )
// }
// }

// function Users(){
//     return(
//         <div>
//             <h2>This is Users components</h2>

//             <div className="cardStyle">            
//             {
//                 data.map((data) => {
//                     return (
//                         <User details = {data}/>
//                     )
//                 })             
//             }            
//             </div>
//         </div>        
//     )
// };

export default Users;