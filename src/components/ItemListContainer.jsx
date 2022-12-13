// Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js.
// Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red
import { Container, Row } from 'react-bootstrap';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <Container>
      <Row className="my-4 justify-content-center">
        <ItemList/>
      </Row>
    </Container>
  )
}

export default ItemListContainer;