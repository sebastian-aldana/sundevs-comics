import { createAction } from "redux-actions";

const ActionTypes = {
  setCharactersData: "CHARACTERS/SET_CHARACTERS_DATA",
};

const setCharactersData = createAction(ActionTypes.setCharactersData);

export const Actions = { setCharactersData };
