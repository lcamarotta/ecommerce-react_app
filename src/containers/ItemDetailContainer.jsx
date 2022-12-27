//  Display received data from <ItemDetail/>

import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import fetchFirestore from "../utils/fetchFirestore";

const ItemDetailContainer = () => {
	const [itemsToRender, setItemsToRender] = useState([]);
	const	{ itemId } = useParams();

	useEffect(() => {
		fetchFirestore('itemWithThisID', itemId)
		.then(result => setItemsToRender([result]))
		.catch(err => console.log(err))
	}, [])
  return (
    itemsToRender.length ? <ItemDetail {...itemsToRender[0]} /> : <LoadingScreen variant={true}/>
  )
}

export default ItemDetailContainer