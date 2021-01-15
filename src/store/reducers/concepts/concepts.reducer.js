import { handleAction } from "redux-actions";
import { Actions } from "./concepts.actios";

const initialState = {};

const setConcepstData = handleAction(
  Actions.setConcepstData,
  (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  initialState
);

const conceptsReducer = (state = initialState, action) => {
  let currentState = setConcepstData(state, action);
  return currentState;
};

export default conceptsReducer;
