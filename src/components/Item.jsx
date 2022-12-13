// Item.js: Es un componente destinado a mostrar información breve del producto que
// el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


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