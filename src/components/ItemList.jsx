//  Group received cards from <Item/>
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';
import LoadingScreen from './LoadingScreen';

const ItemList = ({ itemsToRender }) => {
	return (
    <Container>
      <Row className="my-4 justify-content-center">
				{
					itemsToRender.length ?	itemsToRender.map( item => ( <Item key={item.id} {...item}/> )) : <LoadingScreen msg={'Item List'}/>
				}
      </Row>
    </Container>
  )
}

export default ItemList;