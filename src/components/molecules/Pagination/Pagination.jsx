import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const IssuesPagination = ({ page, handleChange, count }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      showFirstButton
      showLastButton
      size="large"
      siblingCount={10}
    />
  );
};

export default IssuesPagination;
