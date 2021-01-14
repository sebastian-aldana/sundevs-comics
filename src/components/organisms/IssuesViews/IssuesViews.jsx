import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import IssuesListView from "_molecules_/IssuesListView/IssuesListView";
import IssuesGridView from "_molecules_/IssuesGridView/IssuesGridView";
import Pagination from "_molecules_/Pagination/Pagination";
import {
  getIsListView,
  getCurrentPage,
  getPagesNumber,
} from "_reducers_/issues/issues.selectors";
import { setIssuePage } from "_reducers_/issues/issues.sync-actions";
import { asyncGetIssues } from "_reducers_/issues/issues.async-actions";
import useStyles from "./IssuesViews.styles";

const PaginationWrapper = ({ children }) => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const currentPage = useSelector(getCurrentPage);

  const pagesNumber = useSelector(getPagesNumber);

  const handleChangePage = useCallback(
    (event, value) => {
      dispatch(setIssuePage(value));
      dispatch(asyncGetIssues());
    },
    [currentPage]
  );

  return (
    <>
      <div className={styles.paginationContainer}>
        <Pagination
          page={currentPage}
          handleChange={handleChangePage}
          count={pagesNumber}
        />
      </div>
      {children}
      <div className={styles.paginationContainer}>
        <Pagination
          page={currentPage}
          handleChange={handleChangePage}
          count={pagesNumber}
        />
      </div>
    </>
  );
};

const IssuesViews = ({ pageIssues }) => {
  const router = useRouter();

  const styles = useStyles();

  const isListView = useSelector(getIsListView);

  const onIssueClick = (issue) => () => {
    const {
      volume: { api_detail_url },
    } = issue;
    const issueFirstPosition =
      api_detail_url.search("volume") + "volume".length + 1;
    const issueId = api_detail_url.substring(
      issueFirstPosition,
      api_detail_url.length - 1
    );
    router.push(`/volume/${issueId}`);
  };

  if (isListView) {
    return (
      <PaginationWrapper>
        {pageIssues && pageIssues.length > 0 ? (
          pageIssues.map((issue) => (
            <IssuesListView
              image={issue.image.original_url}
              name={`${issue.volume ? issue.volume.name : ""}-${
                issue.issue_number
              }`}
              date={issue.date_added}
              onIssueClick={onIssueClick(issue)}
            />
          ))
        ) : (
          <></>
        )}
      </PaginationWrapper>
    );
  } else {
    return (
      <PaginationWrapper>
        <div className={styles.gridContainer}>
          {pageIssues && pageIssues.length > 0 ? (
            pageIssues.map((issue) => (
              <IssuesGridView
                image={issue.image.original_url}
                name={`${issue.volume ? issue.volume.name : ""}-${
                  issue.issue_number
                }`}
                date={issue.date_added}
                onIssueClick={onIssueClick(issue)}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </PaginationWrapper>
    );
  }
};

export default IssuesViews;
