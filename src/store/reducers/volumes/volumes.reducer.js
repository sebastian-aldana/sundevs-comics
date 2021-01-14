import { handleAction } from "redux-actions";
import { Actions } from "./volumes.actions";

const initialState = {};

const setVolumeData = handleAction(
  Actions.setVolumeData,
  (state, { payload }) => ({
    ...state,
    [payload.id]: payload.data.results,
  }),
  initialState
);

const volumesReducer = (state = initialState, action) => {
  let currentState = setVolumeData(state, action);
  return currentState;
};

export default volumesReducer;
