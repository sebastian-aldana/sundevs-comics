import React from "react";
import useStyles from "./IssuesListView.styles";
import { Divider, ListItem, Typography } from "@material-ui/core";

const IssuesListView = ({ image, date, name, onIssueClick }) => {
  const styles = useStyles();
  return (
    <>
      <ListItem button className={styles.listContainer} onClick={onIssueClick}>
        <div>
          <img className={styles.image} src={image} alt="" />
        </div>
        <div>
          <Typography variant="h6">{name || ""}</Typography>
          <p>{date}</p>
        </div>
      </ListItem>
      <Divider />
    </>
  );
};

export default IssuesListView;
