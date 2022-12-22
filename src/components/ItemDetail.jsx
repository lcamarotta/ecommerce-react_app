//  Render one item w/ details
//  Includes fn AddCheckoutButton, ItemCount
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ( item ) => {
  const [checkoutButton, setCheckoutButton] = useState(false)
  const cartCtx = useContext(CartContext)
  const checkoutReady = (itemCuantity) => {
    setCheckoutButton(true)
    cartCtx.addToCart(itemCuantity, item)
    toast.success(`You added ${itemCuantity} items to cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <Col sm={10} lg={6}>
          <Card className="text-center ItemDetailCard mx-1 my-4"> 
            <Card.Header>Best for: { item.category[0].toUpperCase() + item.category.substring(1) }</Card.Header>
            <Card.Img variant="top" src={ item.thumbnail } />
            <Card.Body>
              <Card.Title>{ item.title }</Card.Title>
              <Card.Title>{ item.price }</Card.Title>
              <Row className='justify-content-center my-3'>
                <Col sm={10}>
                  <Card.Text>{ item.description }</Card.Text>
                </Col>
              </Row>
              { checkoutButton
               ? <Button variant='outline-info'>
                  <Link to={'/cart'} className='text-decoration-none text-reset'>Checkout</Link>
                 </Button> 
               : <ItemCount stock={ item.stock } checkoutReady={ checkoutReady }/>
              }
            </Card.Body>
            <Card.Footer className="text-muted">{ item.stock } IN STOCK</Card.Footer>
          </Card>
        </Col>
      </Row>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </Container>
  );
}

export default ItemDetail