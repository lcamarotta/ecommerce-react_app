// ItemListContainer.jsx simulates fetching data to backend and sends it to <ItemList/>
import ItemList from '../components/ItemList';
import { data } from '../utils/data';
import { fetchData } from '../utils/fetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	
  const [itemsToRender, setItemsToRender] = useState([]);
  const { category } = useParams();

	useEffect(() => {
		//select category
		const dataToFetch = data.filter( item => {
			if(category) return item.category === category
			return item }
		)
		//simulate backend fetch
		fetchData(2000, dataToFetch, true)
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