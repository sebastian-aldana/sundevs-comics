import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  optionsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "15px",
    "@media (max-width: 1550px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "@media (max-width: 1300px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
    "@media (max-width: 800px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 550px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  image: {
    maxWidth: "30vw",
  },
  option: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
