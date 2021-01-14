import { createAction } from "redux-actions";

export const ActionTypes = {
  setVolumeData: "VOLUMES/SET_VOLUME_DATA",
};

const setVolumeData = createAction(ActionTypes.setVolumeData);

export const Actions = { setVolumeData };
