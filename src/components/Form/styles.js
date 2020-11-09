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
    letterSpacing: ".1em",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },

  button__submit: {
    marginBottom: 10,
    letterSpacing: ".1em",
  },
  button__clear: {
    letterSpacing: ".1em",
  },
}));
