import { StyleSheet } from "react-native";
import { rem, vh, vw } from "../../lib/constants";
export const primBl = "#000000ba";
export const secBl = "#1d1d1d69";
export const tertBl = "#504f4fba";
export const primWh = "#ffffffba";
export const tertWh = "#ffffffe6";
export const nullPdMg = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
};
export const global_styles = StyleSheet.create({
  bi: {},
  body: {
    backgroundColor: primBl,
    flex: 1,
  },
  button: {
    marginBottom: 0.02 * vh,
  },
  button_btnInfo: {
    backgroundColor: "linear-gradient(to right, #4aacbbda, #0cacc5ed)",
    borderColor: "transparent",
  },
  _divInp_nlabel: {
    marginTop: 0.5 * rem,
    marginBottom: 0.5 * rem,
  },
  _divResult_nlabel: {
    marginTop: 0.5 * rem,
    marginBottom: 0.5 * rem,
  },
  _divInp_n_formControl: {
    backgroundColor: tertBl,
    //TRANSITION
  },
  _divResult_n_formControl: {
    backgroundColor: tertBl,
  },
  dl: {
    ...nullPdMg,
  },
  _formControl_resultOutput: {
    borderWidth: 0.15 * rem,
    borderColor: "#ced4da9d",
    borderStyle: "solid",
  },
  header: {
    //ANIMATION
  },
  inpEntry: {
    color: primWh,
    //TRANSITION
  },
  label: {
    marginBottom: 0.005 * vh,
    color: primWh,
  },
  menu: {
    ...nullPdMg,
  },
  ol: {
    ...nullPdMg,
  },
  output: {
    minHeight: 2.3 * rem,
    marginBottom: 0.005 * vh,
  },
  section: {
    display: "flex",
    alignItems: "center",
    paddingTop: 0.25 * rem,
    paddingRight: 0.25 * rem,
    paddingBottom: 0.25 * rem,
    paddingLeft: 0.25 * rem,
    //margin: auto auto
  },
  ul: {
    ...nullPdMg,
  },
  dialog_modalContent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    position: "relative",
    width: 0.85 * vw,
    zIndex: 900,
    backgroundColor: "#fff",
    borderRadius: 0.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0.6 * rem,
    paddingTop: 0.75 * rem,
    paddingBottom: 0.75 * rem,
    paddingRight: 0.25 * rem,
    paddingLeft: 0.25 * rem,
    // left: 5%
    // height: max-content
    //ANIMATION
  },
  scrollView: {
    flex: 1,
  },
  _centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  _modalContent_nform: {
    //ANIMATION
  },
  __resultsGrid: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: 0.9 * vw,
  },
  __resultsGrid_nlabel: {
    maxWidth: vw,
    marginBottom: 0,
  },
  __sectionMain: {
    display: "flex",
    flexDirection: "column",
    width: 0.975 * vw,
    columnGap: 1 * rem,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: rem,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
});
