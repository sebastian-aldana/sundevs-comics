import { handleAction } from "redux-actions";
import { Actions } from "./issues.actions";

const initialState = {
  page: {},
  isListView: false,
  currentPage: 1,
  pagesNumber: 0,
  issues: {},
};

const setIssuesData = handleAction(
  Actions.setIssuesData,
  (state, { payload }) => ({
    ...state,
    page: { ...state.page, [payload.data.offset / 100]: payload.data.results },
    pagesNumber: payload.pagesNumber,
  }),
  initialState
);

const setIsListView = handleAction(
  Actions.setIsListView,
  (state, { payload }) => ({
    ...state,
    isListView: payload,
  }),
  initialState
);

const setIssuePage = handleAction(
  Actions.setIssuePage,
  (state, { payload }) => ({
    ...state,
    currentPage: payload,
  }),
  initialState
);

const comicsReducer = (state = initialState, action) => {
  let currentState = setIssuesData(state, action);
  currentState = setIsListView(currentState, action);
  currentState = setIssuePage(currentState, action);
  return currentState;
};

export default comicsReducer;
