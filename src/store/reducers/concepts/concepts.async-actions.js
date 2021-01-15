import axios from "axios";
import { Actions as ConceptsActions } from "./concepts.actios";
import { Actions as FeedbackActions } from "_reducers_/feedback-provider/feedback.actions";

const apiPrefix = "/api/concepts";

export const asyncGetConcepts = (urls) => async (dispatch) => {
  try {
    dispatch(FeedbackActions.setIsLoading(true));
    const { data } = await axios.post(apiPrefix, urls);
    dispatch(ConceptsActions.setConcepstData(data));
    dispatch(
      FeedbackActions.setFeedback({
        type: "success",
        message: "succesfully load of concepts",
      })
    );
  } catch (error) {
    dispatch(
      FeedbackActions.setFeedback({
        type: "error",
        message: `cant get concepts: ${error}`,
      })
    );
  } finally {
    dispatch(FeedbackActions.setIsLoading(false));
  }
};
