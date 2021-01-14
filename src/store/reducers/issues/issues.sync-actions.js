import { Actions as IssuesActions } from "_reducers_/issues/issues.actions";

export const setListView = (isListView) => async (dispatch) => {
  dispatch(IssuesActions.setIsListView(isListView));
};

export const setIssuePage = (page) => async (dispatch) => {
  dispatch(IssuesActions.setIssuePage(page));
};
