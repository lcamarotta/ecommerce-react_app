//	Item.js renders a card for each received item.
//	Each card displays brief information only.
//	Each card also contains a button to view ItemDetail
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({ title, price, thumbnail }) => {
	return (
		<Col>
			<Card style={{ width: '18rem' }} className="mx-1 my-3 text-center">
				<Card.Img variant="top" src={thumbnail} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{price}</Card.Text>
					<Button variant="outline-primary">Details</Button>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default Item;