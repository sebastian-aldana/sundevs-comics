import { createAction } from "redux-actions";

const ActionTypes = {
  setLocationsData: "LOCATIONS/SET_LOCATIONS_DATA",
};

const setLocationsData = createAction(ActionTypes.setLocationsData);

export const Actions = { setLocationsData };
