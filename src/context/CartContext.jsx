import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const[cartList, setCartList] = useState([])
  const addToCart = (qty, item) => {
    setCartList([...cartList,
      {
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        price: item.price,
        qty: qty
      }
    ])
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;