import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbb({productName,id}) {
  const location = useLocation();
  const path = location.pathname;
  if (path === "/products") {
    return (
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>
          <span className="text-black text-decoration-none">Inicio</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item active={true} linkAs={Link} linkProps={{ to: "/products"}}>Productos</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
  if(path === `/products/${id}`){
    return(
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>
          <span className="text-black text-decoration-none">Inicio</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/products"}}>
          <span className="text-black text-decoration-none">Productos</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item active={true}>{productName}</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default Breadcrumbb;
