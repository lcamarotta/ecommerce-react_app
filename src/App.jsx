import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/Item";



const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        {/* <Route path="/item" element={<Item/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;