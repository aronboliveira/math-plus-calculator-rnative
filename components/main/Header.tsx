import { Text, View, StyleSheet } from "react-native";
import { global_styles, primWh } from "../../assets/styles/global_styles";
import LoginWrapper from "../wrappers/LoginWrapper";
import { rem, vh, vw } from "../../lib/constants";
import AccordionWrapper from "../accordion/AccordionWrapper";
export const header_styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: vw,
    height: 0.1 * vh,
    paddingTop: 2 * rem,
    paddingLeft: rem,
    paddingRight: rem,
    top: 0,
    zIndex: 10,
    borderBottomColor: "rgba(40, 40, 40, 0.6)",
    borderBottomWidth: 0.15 * rem,
    borderStyle: "solid",
    textAlign: "center",
    fontSize: 0.8 * rem,
    fontWeight: 500,
  },
  header_nany: {},
  header_nbutton: {
    marginBottom: 0,
  },
  header_n_biBtn: {
    color: "rgba(223, 221, 221, 0.745)",
    paddingRight: rem,
    fontWeight: 700,
  },
  header_n_title: {
    paddingBottom: rem,
    paddingRight: 0.12 * vw,
    color: primWh,
  },
  header_n__dlgHeaderRoot: {
    position: "static",
  },
});
export default function Header(): JSX.Element {
  return (
    <View style={[global_styles.header, header_styles.header]}>
      <LoginWrapper />
      <Text style={[header_styles.header_nany, header_styles.header_n_title]}>MATH PLUS</Text>
      <AccordionWrapper />
    </View>
  );
}
