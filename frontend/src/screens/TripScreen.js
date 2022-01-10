import "./TripScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getTripDetails } from "../redux/actions/tripActions";
import { addToCart } from "../redux/actions/cartActions";

const TripScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const tripDetails = useSelector((state) => state.getTripDetails);
  const { loading, error, trip } = tripDetails;

  useEffect(() => {
    if (trip && match.params.id !== trip._id) {
      dispatch(getTripDetails(match.params.id));
    }
  }, [dispatch, match, trip]);

  const addToCartHandler = () => {
    dispatch(addToCart(trip._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="tripscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="tripscreen__left">
            <div className="left__image">
              <img src={trip.imageUrl} alt={trip.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{trip.name}</p>
              <p>Price: ${trip.price}</p>
              <p>Description: {trip.description}</p>
            </div>
          </div>
          <div className="tripscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${trip.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {trip.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(trip.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                Guide
                <select id="framework">
                    <option value="1">Yes</option>
                    <option value="2">No</option>
               
                 </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TripScreen;