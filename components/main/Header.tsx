import { Text, View, StyleSheet } from "react-native";
import { global_styles } from "../../assets/styles/global_styles";
import LoginWrapper from "../wrappers/LoginWrapper";
import { rem, vw } from "../../lib/constants";
import AccordionWrapper from "../accordion/AccordionWrapper";
export const headerStyles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: vw,
    paddingTop: 0.3 * rem,
    paddingBottom: 0.3 * rem,
    position: "absolute",
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
  header_n_biBtn: {
    color: "rgba(223, 221, 221, 0.745)",
    paddingRight: rem,
    fontWeight: 700,
  },
  header_n__dlgHeaderRoot: {
    position: "static",
  },
  header_nbutton: {
    marginBottom: 0,
  },
});
export default function Header(): JSX.Element {
  return (
    <View style={[global_styles.header, headerStyles.header]}>
      <Text style={[headerStyles.header_nany]}>MATH PLUS</Text>
      <LoginWrapper />
      <AccordionWrapper />
    </View>
  );
}
