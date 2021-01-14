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
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import GridOnIcon from "@material-ui/icons/GridOn";
import ListIcon from "@material-ui/icons/List";
import useStyles from "./Header.styles";
import { setListView } from "_reducers_/issues/issues.sync-actions";

const Header = ({ title, showViewOptions }) => {
  const styles = useStyles();

  const router = useRouter();

  const dispatch = useDispatch();

  const [isListView, setIsListView] = useState(false);

  const handleListView = useCallback(() => {
    setIsListView(!isListView);
    dispatch(setListView(!isListView));
  }, [isListView]);

  return (
    <div className={styles.root}>
      <AppBar className={styles.appbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => router.push("/")}
          >
            <img src="/static/comic-vine.png" width="90" />
          </IconButton>
          <Typography className={styles.title} variant="h6" noWrap>
            {`Comic Book - ${title || ""}`}
          </Typography>
          <div className={styles.titleContainer}>
            {showViewOptions && (
              <div className={styles.titleContainer}>
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
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
