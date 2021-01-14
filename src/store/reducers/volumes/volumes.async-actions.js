import axios from "axios";
import { Actions as VolumesActions } from "./volumes.actions";

const apiPrefix = "/api/volume";

export const asyncGetVolume = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiPrefix}?id=${id}`);
    dispatch(VolumesActions.setVolumeData({ data, id }));
  } catch (error) {
    console.log(error);
  }
};
