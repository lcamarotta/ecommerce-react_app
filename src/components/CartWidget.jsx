import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const cartCtx = useContext(CartContext);

  if(cartCtx.totalItems() != 0){
    return (
      <div className="me-5">
        <Link to="/cart" className='text-decoration-none text-reset'>
          <span className="me-2">{ cartCtx.totalItems() }</span>
          <MdShoppingCart size="2em"/>
        </Link>
      </div>
    )
  }

  return (
    <div className="me-5">
      <Link to="/cart" className='text-decoration-none text-reset'>
        <MdShoppingCart size="2em"/>
      </Link>
    </div>
  )
}

export default CartWidget;