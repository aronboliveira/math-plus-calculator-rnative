import { View } from "react-native";
import { DivMainProps } from "../../lib/declarations/components";
import BtnCalc from "../calc/BtnCalc";
import DivEntry from "./DivEntry";
import ResultsGrid from "./ResultsGrid";
import replaced_styles from "../../assets/styles/replaced_styles";
import { rem } from "../../lib/constants";
export const div_main_styles = {
  hr: {
    marginTop: 2 * rem,
    borderTopWidth: 0.5 * rem,
    borderStyle: "solid" as "solid",
    borderColor: "#000",
  },
};
export default function DivMain({ inpList, outpList }: DivMainProps): JSX.Element {
  return (
    <View>
      <DivEntry inpList={inpList} />
      <BtnCalc />
      {/* //TODO contextualizar ao invés de usar prop */}
      <ResultsGrid outpList={outpList} />
      <View style={[replaced_styles.hr, div_main_styles.hr]}></View>
    </View>
  );
}
