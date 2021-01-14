import React from "react";
import useStyles from "./IssuesGrridView.styles";
import { ListItem, Typography } from "@material-ui/core";

const IssuesGridView = ({ image, date, name, onIssueClick }) => {
  const styles = useStyles();
  return (
    <ListItem button className={styles.container} onClick={onIssueClick}>
      <img className={styles.image} src={image} alt="" />
      <Typography variant="h6">{name}</Typography>
      <p>{date}</p>
    </ListItem>
  );
};

export default IssuesGridView;
