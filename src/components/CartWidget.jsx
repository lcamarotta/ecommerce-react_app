import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <div className="me-5">
      <span className="me-2">0</span>
      <MdShoppingCart size="2em"/>
    </div>
  )
}

export default CartWidget;