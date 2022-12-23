//	Item.js renders a card for each received item.
//	Each card displays brief information only.
//	Each card also contains a button to view ItemDetail
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ title, price, thumbnail, id }) => {
	return (
		<Col className='justify-content-center d-flex'>
			<Card style={{ width: '18rem' }} className="mx-1 my-3 text-center">
				<Card.Img style={{ width: '18rem', height: '14rem'}} variant="top" src={thumbnail} />
				<Card.Body>
					<Card.Title style={{ height: '6rem'}}>{title}</Card.Title>
					<Card.Text>${price}</Card.Text>
					<Link to={`/item/${id}`} className='text-decoration-none text-reset'>
						<Button variant="outline-primary">Details</Button>
					</Link>
					
				</Card.Body>
			</Card>
		</Col>
	)
}

export default Item;