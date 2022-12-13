//  Group received cards from <Item/>
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';

const ItemList = ({ items }) => {
	return (
    <Container>
      <Row className="my-4 justify-content-center">
				{
					items.length ?	items.map( item => ( <Item key={item.id} {...item}/> )) : 'LOADING'
				}
      </Row>
    </Container>
  )
}

export default ItemList;