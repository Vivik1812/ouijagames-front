import Dropdown from 'react-bootstrap/Dropdown';

function Dropdownn() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        Ordenar predetiminado
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          Ordenar por precio: bajo a alto
        </Dropdown.Item>
        <Dropdown.Item>
          Ordenar por precio: alto a bajo
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownn;
