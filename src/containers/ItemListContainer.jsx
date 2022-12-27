// ItemListContainer.jsx simulates fetching data to backend and sends it to <ItemList/>
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchFirestore from '../utils/fetchFirestore';

const ItemListContainer = () => {
	
  const [itemsToRender, setItemsToRender] = useState([]);
  const { category } = useParams();
	
	useEffect(() => {
		fetchFirestore('category', category)
			.then(result => setItemsToRender(result))
			.catch(err => console.log(err))
		return( () => {
			setItemsToRender([])
		})
	}, [category])

	return (
		<ItemList itemsToRender={ itemsToRender } />
  )
}

export default ItemListContainer;