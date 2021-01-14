import React from "react";
import Header from "_organisms_/Header/Header";
import IssuesViews from "_organisms_/IssuesViews/IssuesViews";
import { useSelector } from "react-redux";
import {
  getPageIssues,
  getCurrentPage,
} from "_reducers_/issues/issues.selectors";

const ComicsTemplate = () => {
  const currentPage = useSelector(getCurrentPage) - 1;

  const pageIssues = useSelector(getPageIssues(currentPage));

  return (
    <>
      <Header title="Latest Issues" showViewOptions />
      <IssuesViews pageIssues={pageIssues} />
    </>
  );
};

export default ComicsTemplate;
