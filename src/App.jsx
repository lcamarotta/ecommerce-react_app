import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;