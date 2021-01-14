import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  listContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "1% 3%",
  },
  image: {
    maxWidth: 400,
    maxHeight: 550,
  },
}));
