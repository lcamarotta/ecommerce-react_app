//  Render one item w/ details
//  Includes fn AddToCart, ItemCount
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ title, category, thumbnail, description, price }) => {
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <Col sm={10} lg={6}>
          <Card className="text-center ItemDetailCard mx-1 my-4"> 
            <Card.Header>Best for: {category[0].toUpperCase() + category.substring(1)}</Card.Header>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Title>{price}</Card.Title>
              <Row className='justify-content-center my-3'>
                <Col sm={10}>
                  <Card.Text>{description}</Card.Text>
                </Col>
              </Row>
              <Button className='my-2' variant="primary">Add to cart</Button>
            </Card.Body>
            <Card.Footer className="text-muted">000 IN STOCK</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail