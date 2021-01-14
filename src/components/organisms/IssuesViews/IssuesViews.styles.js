import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  gridContainer: {
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: "repeat(5, 1fr)",
    marginTop: "3%",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
});
