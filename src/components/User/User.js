import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function User(props){

    //object destructuring
    const {details , openModal} = props;

    function showFullDetails(){
        openModal(details.id);
    }

        return (
            <div className='cardStyle'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className = "img" src={details.image} />
                    <Card.Body className = "cardBody">
                        <Card.Title>{details.firstName}</Card.Title>
                        <Card.Text>{details.username}</Card.Text>
                        <Button onClick = {showFullDetails} variant="primary">Show Details</Button>
                    </Card.Body>
                </Card>
            </div>
            
          );
}

export default User