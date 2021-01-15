import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    maxWidth: 350,
    maxHeight: 400,
    "@media (max-width: 1650px)": {
      maxWidth: 250,
      maxHeight: 300,
    },
    "@media (max-width: 920px)": {
      maxWidth: 200,
      maxHeight: 250,
    },
    "@media (max-width: 800px)": {
      maxWidth: 175,
      maxHeight: 225,
    },
    "@media (max-width: 800px)": {
      maxWidth: 150,
      maxHeight: 200,
    },
  },
});
