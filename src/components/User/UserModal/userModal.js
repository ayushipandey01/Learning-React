import { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './userModal.css'
import Spinner from '../../Common/Spinner/Spinner';

function UserModal(props) {

    const {id , closeModal} = props;
    const [userData , setUserData] = useState(null);
    const [isLoading , changeIsLoading ] = useState(true);

    // console.log(id);

    // const [] = props;

    useEffect(()=> {
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            changeIsLoading(false);  
            setUserData(data); 
                   
        })      
    },[])

    function showUserDetails(){
        const {id , image ,firstName ,lastName , email} = userData;

        return (
            <div className='modalBody'>
                <img src = {image}></img>             

                <div className='para'>
                    <p>Id : {id}</p>
                    <p>Name : {`${firstName} ${lastName}`} </p>
                    <p>Email : {email}</p>
                </div>            
            </div>            
        )
    }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        {/* <p>user Id : {id}</p> */}
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>

        {
            isLoading ? <Spinner/>  : showUserDetails()
        }

        <Modal.Body>
          
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default UserModal;