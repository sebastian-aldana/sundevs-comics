import { createStore } from "redux";
import { createAction } from "redux-actions";

export const ActionTypes = {
  setConcepstData: "CONCEPTS/SET_CONCEPTS_DATA",
};

const setConcepstData = createAction(ActionTypes.setConcepstData);

export const Actions = { setConcepstData };
