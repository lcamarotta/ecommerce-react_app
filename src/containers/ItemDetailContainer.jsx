//  Display received data from <ItemDetail/>

import { useState, useEffect } from "react";
import { data } from "../utils/data";
import { fetchData } from "../utils/fetchData";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [dataArray, setDataArray] = useState([]);

	useEffect(() => {
		fetchData(2000, data, true)
			.then(() => setDataArray(data))
			.catch(err => console.log(err))
	}, [])
  return (
    dataArray.length ?  <ItemDetail {...dataArray[0]} /> : <p>LOADING</p>
  )
}

export default ItemDetailContainer