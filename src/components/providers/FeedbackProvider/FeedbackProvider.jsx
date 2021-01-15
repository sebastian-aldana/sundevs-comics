import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "_molecules_/Snackbar/Snackbar";
import CircularLoader from "_molecules_/Loader/Loader";
import { Actions as FeedbackActions } from "_reducers_/feedback-provider/feedback.actions";
import { getFeedback } from "_reducers_/feedback-provider/feedback.selectors";

const FeedbackProvider = ({ children }) => {
  const { message, type, isLoading } = useSelector(getFeedback);

  const dispatch = useDispatch();

  const handleOnClose = useCallback((_event, reason) => {
    if (reason !== "clickaway" && reason !== "timeout") {
      dispatch(
        FeedbackActions.setFeedback({ message: "", type: type || "error" })
      );
    }
  }, []);
  return (
    <>
      {children}
      {isLoading && <CircularLoader />}
      <Snackbar
        message={message}
        variant={type}
        open={Boolean(message)}
        onClose={handleOnClose}
      />
    </>
  );
};

export default FeedbackProvider;
