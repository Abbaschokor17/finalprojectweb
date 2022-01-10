import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Trip from "../components/Trip";

//Actions
import { getTrips as listTrips } from "../redux/actions/tripActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getTrips = useSelector((state) => state.getTrips);
  const { trips, loading, error } = getTrips;

  useEffect(() => {
    dispatch(listTrips());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Trips</h2>
      <div className="homescreen__trips">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
            trips.map((trip) => (
            <Trip
              key={trip._id}
              name={trip.name}
              description={trip.description}
              price={trip.price}
              imageUrl={trip.imageUrl}
              tripId={trip._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;