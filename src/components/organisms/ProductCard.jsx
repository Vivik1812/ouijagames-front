import CardBody from '../molecules/CardBody';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard({product, isDescription}) {

  return (
    <>
      <Card style={{width : "20rem"}} className = 'm-4 p-3 text-center'>
        <Link to={`/products/${product.id}`} className='h-100'>
          <Image src={product.img} alt={product.name} className="card-img-top h-75"/>
        </Link>      
        <Card.Body>
          <CardBody name={product.name} description={isDescription? product.description : ""} price={product.price} src={product.img} className="card-img-top"/>
        </Card.Body>  
        <Button variant="dark">Agregar</Button>
      </Card>
    </>
  );
}

export default ProductCard;