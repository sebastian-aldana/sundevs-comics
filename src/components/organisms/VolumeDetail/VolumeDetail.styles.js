import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    margin: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: "10%",
  },
}));
