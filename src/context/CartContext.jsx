import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const[cartList, setCartList] = useState([])

  const addToCart = (qty, item) => {
    let itemExists = cartList.find(itemInList => itemInList.id === item.id)
    if(itemExists){
      itemExists.qty += qty
      setCartList([...cartList])
    }
    else{
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
  }

  const totalItems = () => {
    let itemsQty = 0
    cartList.map( item => itemsQty = item.qty + itemsQty )
    return itemsQty
  }
  
  const thisItemTotalPrice = (item) => {
    return item.qty * item.price
  }

  const totalPrice = () => {
    let total = 0
    cartList.map( item => total = thisItemTotalPrice(item) + total )
    return total
  }

  const deleteAll = () => {
    setCartList([])
  }
  
  const deleteItem = (item) => {
    setCartList(cartList.filter(listItem => listItem.id != item.id))
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, totalItems, thisItemTotalPrice, totalPrice, deleteAll, deleteItem }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;