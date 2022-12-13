import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="me-5">
      <Link to="/cart" className='text-decoration-none text-reset'>
        <span className="me-2">0</span>
        <MdShoppingCart size="2em"/>
      </Link>
    </div>
  )
}

export default CartWidget;