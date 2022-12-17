import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const cartCtx = useContext(CartContext);
  
  if(cartCtx.cartList.length === 0) {
    return <h1 className="my-5 text-center">Cart is empty</h1>
  }

  return (
    <Container fluid>
      <h1 className="my-4 text-center">Your Cart</h1>
      <Row className="justify-content-center">
        <Col className="col-lg-8 col-xl-6">
        {
          cartCtx.cartList.map( item =>
            <Card className="mx-1 my-3">
              <Row className="g-0 text-center align-items-center">
                <Col className="col-md-4">
                  <Card.Img className="img-fluid" src={item.thumbnail} />
                </Col>
                <Col className="col-md-6">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title className="mt-4">{item.qty} x ${item.price} = ${item.qty * item.price}</Card.Title>
                  </Card.Body>
                </Col>
                <Col className="col-md-2">
                  <Button variant="outline-danger">Remove</Button>
                </Col>
              </Row>
            </Card>
          )
        }
          <Card className="mx-1 my-3">
            <Card.Title> calc total due </Card.Title>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart