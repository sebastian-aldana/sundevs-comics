import axios from "axios";
import { Actions as IssuesActions } from "_reducers_/issues/issues.actions";
import { Actions as FeedbackActions } from "_reducers_/feedback-provider/feedback.actions";
import { store } from "_store_";
const apiPrefix = "/api/issues";

export const asyncGetIssues = () => async (dispatch) => {
  try {
    dispatch(FeedbackActions.setIsLoading(true));
    const {
      issues: { currentPage, page },
    } = store.getState();
    const numberOfPage = currentPage - 1;
    console.log(page);
    if (!page[numberOfPage]) {
      const { data } = await axios.get(
        `${apiPrefix}?currentPage=${numberOfPage}`
      );
      let pagesNumber = parseInt(data.number_of_total_results / 100);
      if (data.number_of_total_results % 100 > 0) {
        pagesNumber += 1;
      }
      dispatch(IssuesActions.setIssuesData({ data, pagesNumber }));
      dispatch(
        FeedbackActions.setFeedback({
          type: "success",
          message: "succesfully load of issues",
        })
      );
    }
  } catch (error) {
    dispatch(
      FeedbackActions.setFeedback({
        type: "error",
        message: `cant get issues: ${error}`,
      })
    );
  } finally {
    dispatch(FeedbackActions.setIsLoading(false));
  }
};
