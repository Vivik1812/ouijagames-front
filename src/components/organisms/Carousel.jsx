import Carousel from "react-bootstrap/Carousel";
import Image from '../atoms/Image'
import CarouselImages from "../../data/CarouselImgs";

function CarouselProduct() {
    
  return (
    <Carousel className='m-5' variant="">
      {CarouselImages.map((image) => (
        <Carousel.Item key={image.id}>
          <Image src={image.url}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselProduct;
