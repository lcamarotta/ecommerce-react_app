import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import OnSale from "./components/OnSale";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/onsale" element={<OnSale/>} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;