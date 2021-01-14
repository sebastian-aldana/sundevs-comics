import axios from "axios";
import { Actions as IssuesActions } from "_reducers_/issues/issues.actions";
import store from "_store_";
const apiPrefix = "/api/issues";

export const asyncGetIssues = () => async (dispatch) => {
  try {
    const {
      issues: { currentPage },
    } = store.getState();
    const { data } = await axios.get(
      `${apiPrefix}?currentPage=${currentPage - 1}`
    );
    let pagesNumber = parseInt(data.number_of_total_results / 100);
    if (data.number_of_total_results % 100 > 0) {
      pagesNumber += 1;
    }
    dispatch(IssuesActions.setIssuesData({ data, pagesNumber }));
  } catch (error) {
    console.log(error);
  }
};
