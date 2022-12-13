// ItemListContainer.jsx simulates fetching data to backend and sends it to <ItemList/>
import ItemList from '../components/ItemList';
import { data } from '../utils/data';
import { fetchData } from '../utils/fetchData';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [dataArray, setDataArray] = useState([]);

	useEffect(() => {
		fetchData(2000, data, true)
			.then(() => setDataArray(data))
			.catch(err => console.log(err))
	}, [])

  return (
    <ItemList items={ dataArray } />
  )
}

export default ItemListContainer;