// ItemList.js Es un agrupador de un set de componentes Item.js
// (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
import { useState, useEffect } from 'react';
import { data } from '../utils/data';
import { fetchData } from '../utils/fetchData';
import Item from './Item';

const ItemList = () => {
	const [dataArray, setDataArray] = useState([]);

	//componentDidMount
	useEffect(() => {
		fetchData(2000, data, true)
			.then(() => setDataArray(data))
			.catch(err => console.log(err))
	}, [])

	return	(
		<>
			{
				dataArray.map( item => ( <Item key={item.id} {...item}/> ))
			}
		</>
	)
}

export default ItemList;