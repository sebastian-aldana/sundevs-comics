import React from "react";
import clsx from "clsx";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import MuiSnackbar from "@material-ui/core/Snackbar";
import CheckIcon from "@material-ui/icons/Check";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./Snackbar.styles";

const variantIcon = {
  success: CheckIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const Snackbar = ({
  message,
  onClose,
  variant,
  open,
  autoHideDuration,
  anchorOrigin,
}) => {
  const classes = useStyles();
  const Icon = variantIcon[variant];

  return (
    <MuiSnackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <SnackbarContent
        className={clsx(classes[variant], classes.root)}
        aria-describedby="snackbar"
        message={
          <span id="snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </MuiSnackbar>
  );
};

Snackbar.defaultProps = {
  autoHideDuration: 6000,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
};

export default Snackbar;
