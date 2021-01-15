import axios from "axios";
import { Actions as CharactersActions } from "./characters.actions";
import { Actions as FeedbackActions } from "_reducers_/feedback-provider/feedback.actions";

const apiPrefix = "/api/character";

export const asyncGetCharacters = (urls) => async (dispatch) => {
  try {
    dispatch(FeedbackActions.setIsLoading(true));
    const { data } = await axios.post(apiPrefix, urls);
    dispatch(CharactersActions.setCharactersData(data));
    dispatch(
      FeedbackActions.setFeedback({
        type: "success",
        message: "succesfully load of characters",
      })
    );
  } catch (error) {
    dispatch(
      FeedbackActions.setFeedback({
        type: "error",
        message: `cant get characters: limit of request has ben reached `,
      })
    );
  } finally {
    dispatch(FeedbackActions.setIsLoading(false));
  }
};
