import { createAction } from "redux-actions";

export const ActionTypes = {
  setIssuesData: "ISSUES/SET_ISSUES_DATA",
  setIsListView: "ISSUES/SET_IS_LIST_VIEW",
  setIssuePage: "ISSUES/SET_ISSUE_PAGE",
};

const setIssuesData = createAction(ActionTypes.setIssuesData);
const setIsListView = createAction(ActionTypes.setIsListView);
const setIssuePage = createAction(ActionTypes.setIssuePage);

export const Actions = { setIssuesData, setIsListView, setIssuePage };
