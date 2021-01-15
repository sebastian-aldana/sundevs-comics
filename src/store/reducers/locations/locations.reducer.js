import { handleAction } from "redux-actions";
import { Actions } from "./locations.actions";

const initialState = {};

const setLocationsData = handleAction(
  Actions.setLocationsData,
  (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  initialState
);

const locationReducer = (state = initialState, action) => {
  let currentState = setLocationsData(state, action);
  return currentState;
};

export default locationReducer;
