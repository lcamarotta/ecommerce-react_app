import { createContext, useState } from "react";
import { doc, setDoc, serverTimestamp, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const[cartList, setCartList] = useState([])
  const[orderID, setOrderID] = useState('')

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

  const checkout = () => {
    let order = {
      buyer: {
        name: "FakeName",
        email: "fake@email.com",
        phone: "12341234"
      },
      total: totalPrice(),
      items: cartList.map(  
        item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          qty: item.qty
        })
      ),
      date: serverTimestamp()
    }

    const sendOrder = async() => {
      const orderRef = doc(collection(db, "orders"))
      await setDoc(orderRef, order)
      return orderRef
    }
    sendOrder()
      .then(result => {
        setOrderID(result.id)
        cartList.forEach(async(item) => {
          const itemRef = doc(db, "products", item.id)
          await updateDoc(itemRef, {
            stock: increment(-item.qty)
          })
        })
        deleteAll()
      })
      .catch(err => console.log(err))
  }

  return (
    <CartContext.Provider value={{ cartList, orderID, addToCart, totalItems, thisItemTotalPrice, totalPrice, deleteAll, deleteItem, checkout }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;