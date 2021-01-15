import axios from "axios";
import { Actions as VolumesActions } from "./volumes.actions";
import { Actions as FeedbackActions } from "_reducers_/feedback-provider/feedback.actions";
import { store } from "_store_";

const apiPrefix = "/api/volume";

export const asyncGetVolume = (id) => async (dispatch) => {
  try {
    dispatch(FeedbackActions.setIsLoading(true));
    const { volumes } = await store.getState();
    if (!volumes[id]) {
      const { data } = await axios.get(`${apiPrefix}?id=${id}`);
      dispatch(VolumesActions.setVolumeData({ data, id }));
      dispatch(
        FeedbackActions.setFeedback({
          type: "success",
          message: "succesfully load of volumen",
        })
      );
    }
  } catch (error) {
    dispatch(
      FeedbackActions.setFeedback({
        type: "error",
        message: `cant get volumen limit of request has ben reached`,
      })
    );
  } finally {
    dispatch(FeedbackActions.setIsLoading(false));
  }
};
