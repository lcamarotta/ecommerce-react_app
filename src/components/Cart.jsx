import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const cartCtx = useContext(CartContext)
  if(cartCtx.cartList.length === 0) {
    return (
      <Container>
        <h1 className="my-5 text-center">Cart is empty</h1>
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
        <Link to='/' className='text-decoration-none  justify-content-center d-flex'>
						<Button variant="primary">Go Home</Button>
				</Link>
      </Container>
    )
  }
  
  const checkout = () => {
    cartCtx.checkout()
      toast.success(`Order ${cartCtx.orderID} sent`, {
        position: "top-right",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
  }

  const remove = (itemToDelete) => {
    if (itemToDelete === 'all'){
      cartCtx.deleteAll()
      toast.warning(`Cart emptied`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
    }
    cartCtx.deleteItem(itemToDelete)
    toast.warning(`Item removed from cart`, {
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
    <Container fluid> <ToastContainer
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
      <h1 className="my-4 text-center">Your Cart</h1>
      <Row className="justify-content-center">
        <Col className="col-lg-8 col-xl-6">
        {
          cartCtx.cartList.map( item =>
            <Card className="mx-1 my-3" key={item.id}>
              <Row className="g-0 text-center align-items-center">
                <Col className="col-md-4">
                  <Card.Img className="img-fluid" src={item.thumbnail} />
                </Col>
                <Col className="col-md-6">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title className="mt-4">{item.qty} x ${item.price} = ${cartCtx.thisItemTotalPrice(item)}</Card.Title>
                  </Card.Body>
                </Col>
                <Col className="col-md-2">
                  <Button variant="outline-danger" onClick={() => remove(item)}>Remove</Button>
                </Col>
              </Row>
            </Card>
          )
        }
          <Card className="mx-1 my-3">
            <Card.Title className="text-end mx-4 my-3">Total amount: ${cartCtx.totalPrice()} </Card.Title>
            <Button className="my-2 mx-5" variant="success" onClick={() => checkout()}>Send Order</Button>
            <Button className="my-2 mx-5" variant="outline-danger" onClick={() => remove('all')}>Remove all items</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart