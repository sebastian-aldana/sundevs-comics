import { makeStyles } from "@material-ui/core/styles";

const useStyles = ({ image }) =>
  makeStyles(() => ({
    container: {
      display: "flex",
      margin: "5vh 10vw",
      justifyContent: "space-around",
      alignItems: "center",
      "@media (max-width: 1300px)": {
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 1300px)": {
        display: "none",
      },
    },
    detailsContainer: {
      marginLeft: "0",
      "@media (max-width: 1300px)": {
        padding: "5%",
        backgroundColor: "rgba(220,220,220,0.5)",
        /* backgroundImage: `url(${image})`, */
      },
    },
    image: {
      maxWidth: "30vw",
    },
  }));

export default useStyles;
