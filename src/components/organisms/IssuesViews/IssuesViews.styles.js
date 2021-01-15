import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  gridContainer: {
    display: "grid",
    margin: "0 10vw ",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "3%",
    "@media (max-width: 1300px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 700px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 500px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
});
