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
        <div className={styles.titleContainer}>
          <Typography variant="h3">{name || ""}</Typography>
          <Typography variant="h4">{date || ""}</Typography>
        </div>
      </ListItem>
      <Divider />
    </>
  );
};

export default IssuesListView;
