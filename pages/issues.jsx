import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ComicsTemplate from "_templates_/IssuesTemplate/ComicsTemplate";
import { asyncGetIssues } from "_reducers_/issues/issues.async-actions";

const Comics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetIssues());
  }, []);

  return (
    <>
      <ComicsTemplate />
    </>
  );
};

export default Comics;
