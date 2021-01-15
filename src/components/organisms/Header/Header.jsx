import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getIsListView } from "_reducers_/issues/issues.selectors";
import SearchIcon from "@material-ui/icons/Search";
import GridOnIcon from "@material-ui/icons/GridOn";
import ListIcon from "@material-ui/icons/List";
import useStyles from "./Header.styles";
import { setListView } from "_reducers_/issues/issues.sync-actions";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Header = ({ title, showViewOptions }) => {
  const styles = useStyles();

  const isMobile = useMediaQuery("(max-width:800px)");

  const router = useRouter();

  const dispatch = useDispatch();

  const isListViewSelector = useSelector(getIsListView);

  const [isListView, setIsListView] = useState(isListViewSelector || false);

  const handleListView = useCallback(() => {
    setIsListView(!isListView);
    dispatch(setListView(!isListView));
  }, [isListView]);

  if (isMobile && isListView) {
    setIsListView(!isListView);
    dispatch(setListView(!isListView));
  }

  return (
    <div className={styles.root}>
      <AppBar className={styles.appbar} position="static">
        <Toolbar className={styles.container}>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => router.push("/issues")}
          >
            <img src="/static/comic-vine.png" width="90" />
          </IconButton>
          <Typography className={styles.title} variant="h6" noWrap>
            {`Comic Book - ${title || ""}`}
          </Typography>
          <div className={styles.switchContainer}>
            {showViewOptions && (
              <div className={styles.switchContainer}>
                {isListView ? (
                  <Typography variant="h6" noWrap>
                    List Mode
                  </Typography>
                ) : (
                  <Typography variant="h6" noWrap>
                    Grid Mode
                  </Typography>
                )}
                <Switch
                  checked={isListView}
                  onChange={handleListView}
                  color="default"
                />
                {isListView ? (
                  <ListIcon size="3em" />
                ) : (
                  <GridOnIcon size="3em" />
                )}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
