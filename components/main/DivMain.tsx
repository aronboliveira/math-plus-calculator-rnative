import { View, StyleSheet, ScrollView } from "react-native";
import { DivMainProps } from "../../lib/declarations/components";
import BtnCalc from "../calc/BtnCalc";
import DivEntry from "./DivEntry";
import ResultsGrid from "./ResultsGrid";
import replaced_styles from "../../assets/styles/replaced_styles";
import { rem } from "../../lib/constants";
import { Provider } from "react-redux";
import operationsStore from "../../redux/operationsStore";
import { global_styles } from "../../assets/styles/global_styles";
export const div_main_styles = StyleSheet.create({
  divMain: {
    flex: 1,
  },
  hr: {
    marginTop: 2 * rem,
    borderTopWidth: 0.5 * rem,
    borderStyle: "solid" as "solid",
    borderColor: "#000",
  },
});
export default function DivMain({ inpList, outpList }: DivMainProps): JSX.Element {
  return (
    <ScrollView>
      <View style={div_main_styles.divMain}>
        <Provider store={operationsStore}>
          <DivEntry inpList={inpList} />
          <BtnCalc />
          <ResultsGrid outpList={outpList} />
        </Provider>
        <View style={[replaced_styles.hr, div_main_styles.hr]}></View>
      </View>
    </ScrollView>
  );
}
