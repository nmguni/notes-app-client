import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#ffffffa8",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  form__title: {
    color: "#444444",
    fontSize: "1.75rem",
    letterSpacing: ".85px",
    fontWeight: "600",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },

  button__submit: {
    letterSpacing: ".85px",
    textTransform: "capitalize",
    margin: "0 5px",
  },
  button__clear: {
    letterSpacing: ".85px",
    textTransform: "capitalize",
    margin: "0 5px",
  },
  form__buttons: {
    display: "flex",
    flexDirection: " row",
    justifyContent: "space-around",
    width: "300px",
  },
}));
