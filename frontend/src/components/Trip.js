import "./Trip.css";
import { Link } from "react-router-dom";

const Trip = ({ imageUrl, description, price, name, tripId }) => {
  return (
    <div className="trip">
      <img src={imageUrl} alt={name} />

      <div className="trip__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/trip/${tripId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Trip;
