import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./PlaceItem.css";

const PlaceItem = (props) => {
  // const lati = props.coordinates.lat;
  // const long = props.coordinates.lng;

  // console.log("lati: ", lati, "longi: ", long);
  console.log(props.coordinates.lat);
  console.log(props.coordinates.lng);
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
          <div className="place-item__actions">
            <Button
              inverse
              href={`https://www.google.com/maps?q=${props.coordinates.lat},${props.coordinates.lng}`}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger to={` `}>
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
