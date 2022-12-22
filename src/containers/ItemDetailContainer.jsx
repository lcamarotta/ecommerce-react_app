//  Display received data from <ItemDetail/>

import { useState, useEffect } from "react";
import { data } from "../utils/data";
import { fetchData } from "../utils/fetchData";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const ItemDetailContainer = () => {
	const [itemsToRender, setItemsToRender] = useState([]);
	const	{ itemId } = useParams();

	useEffect(() => {
		fetchData(2000, data, true)
			.then(result => setItemsToRender(result))
			.catch(err => console.log(err))
	}, [])
  return (
    itemsToRender.length ? <ItemDetail {...itemsToRender[parseInt(itemId)-1]} /> : <LoadingScreen variant={true}/>
  )
}

export default ItemDetailContainer