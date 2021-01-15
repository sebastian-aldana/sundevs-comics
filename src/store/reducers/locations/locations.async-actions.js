import axios from "axios";
import { Actions as LocationsActions } from "./locations.actions";
import { Actions as FeedbackActions } from "_reducers_/feedback-provider/feedback.actions";

const apiPrefix = "/api/locations";

export const asyncGetLocations = (urls) => async (dispatch) => {
  try {
    dispatch(FeedbackActions.setIsLoading(true));
    const { data } = await axios.post(apiPrefix, urls);
    dispatch(LocationsActions.setLocationsData(data));
    dispatch(
      FeedbackActions.setFeedback({
        type: "success",
        message: "succesfully load of locations",
      })
    );
  } catch (error) {
    dispatch(
      FeedbackActions.setFeedback({
        type: "error",
        message: `cant get locations: limit of request has ben reached`,
      })
    );
  } finally {
    dispatch(FeedbackActions.setIsLoading(false));
  }
};
