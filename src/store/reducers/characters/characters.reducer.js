import { handleAction } from "redux-actions";
import { Actions } from "./characters.actions";

const initialState = {};

const setCharactersData = handleAction(
  Actions.setCharactersData,
  (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  initialState
);

const characterReducer = (state = initialState, action) => {
  let currentState = setCharactersData(state, action);
  return currentState;
};

export default characterReducer;
