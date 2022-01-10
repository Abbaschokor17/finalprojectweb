import * as actionTypes from "../constants/tripConstants";
import axios from "axios";

export const getTrips = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_TRIPS_REQUEST });

    const { data } = await axios.get("/api/trips");

    dispatch({
      type: actionTypes.GET_TRIPS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TRIPS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTripDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_TRIP_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/trips/${id}`);

    dispatch({
      type: actionTypes.GET_TRIP_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TRIP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeTripDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_TRIP_DETAILS_RESET });
};