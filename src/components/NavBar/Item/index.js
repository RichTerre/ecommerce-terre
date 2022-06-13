import { Card, Button } from "react-bootstrap";
import "./item.css"

const Item = ({ info }) => {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={info.image} />
      <Card.Body>
        <Card.Title>{info.nombre}</Card.Title>
        <Button variant="primary">Agregar</Button>
      </Card.Body>
    </Card>
    /*<a href="" className="film">
      <img src={info.image}/>
      <p>{info.nombre}</p>
    </a>*/
  );
};

export default Item;
