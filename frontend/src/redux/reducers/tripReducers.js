import * as actionTypes from "../constants/tripConstants";

export const getTripsReducer = (state = { trips: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_TRIPS_REQUEST:
      return {
        loading: true,
        trips: [],
      };
    case actionTypes.GET_TRIPS_SUCCESS:
      return {
        trips: action.payload,
        loading: false,
      };
    case actionTypes.GET_TRIPS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getTripDetailsReducer = (state = { trip: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_TRIP_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_TRIP_DETAILS_SUCCESS:
      return {
        loading: false,
        trip: action.payload,
      };
    case actionTypes.GET_TRIP_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_TRIP_DETAILS_RESET:
      return {
        trip: {},
      };
    default:
      return state;
  }
};