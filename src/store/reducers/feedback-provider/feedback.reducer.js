import { handleAction } from "redux-actions";
import { Actions } from "./feedback.actions";

let setLoadingTrueCount = 0;

const initialState = {
  message: "",
  type: "error",
  isLoading: false,
  hideOnClickAway: true,
};

const setFeedback = handleAction(
  Actions.setFeedback,
  (state, { payload: { message, type } }) => ({
    ...state,
    message,
    type,
  }),
  initialState
);

const setIsLoading = handleAction(
  Actions.setIsLoading,
  (state, { payload }) => {
    if (payload === true) {
      setLoadingTrueCount += 1;
      return { ...state, isLoading: payload };
    }
    setLoadingTrueCount -= 1;
    if (setLoadingTrueCount <= 0) {
      setLoadingTrueCount = 0;
      return { ...state, isLoading: false };
    }
    return state;
  },
  initialState
);

const feedbackReducer = (state = initialState, action) => {
  let currentState = setFeedback(state, action);
  currentState = setIsLoading(currentState, action);
  return currentState;
};

export default feedbackReducer;
