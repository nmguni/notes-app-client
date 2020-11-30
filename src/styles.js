import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff00",
    borderRadius: "4px",
  },
  heading: {
    color: "#444444",
    letterSpacing: ".95px",
    borderBottom: "solid 5.5px #FFEE58",
    width: "325px",
  },
  // heading__letter__color: {
  //   color: "#2EBE60",
  // },
}));
