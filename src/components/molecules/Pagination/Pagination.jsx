import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const IssuesPagination = ({ page, handleChange, count }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      size="large"
    />
  );
};

export default IssuesPagination;
