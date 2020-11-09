import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    backgroundColor: "ffffffa8",
    borderRadius: "4",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    backgroundColor: "ffffffa8 !important",
  },
  time__stamp: {
    color: "#FFFFFF8F",
  },
  title: {
    padding: "0 16px",
    textTransform: "capitalize",
    letterSpacing: "2px",
  },

  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  delete__icon: {
    color: "#FF304F",
  },
  like__icon: {
    color: "#364F6B",
  },
  tags: {
    letterSpacing: "2px",
  },
});
