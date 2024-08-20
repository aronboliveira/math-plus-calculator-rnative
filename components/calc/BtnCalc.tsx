import { TouchableOpacity, Text, StyleSheet, TextInputState } from "react-native";
import { global_styles } from "../../assets/styles/global_styles";
import { useSelector } from "react-redux";
import { OperationsStore } from "../../lib/declarations/providerLocal";
import { btnPadding, rem } from "../../lib/constants";
import { useDispatch } from "react-redux";
import { set } from "../../redux/slices/outpSlice";
import { looseNum } from "../../lib/declarations/types";
import { parseFinite } from "../../lib/handlers/handlersMath";
export const btn_calc_styles = StyleSheet.create({
  button: {
    display: "flex",
    width: 5.5 * rem,
  },
  _btnCalcValues: {
    fontWeight: "bold",
    color: "#fff",
    borderWidth: 0.1 * rem,
    borderRadius: 0.3 * rem,
    borderTopColor: "#fff6",
    borderRightColor: "#fff1",
    borderBottomColor: "#fff1",
    borderLeftColor: "#fff6",
    paddingTop: btnPadding,
    paddingRight: btnPadding,
    paddingBottom: btnPadding,
    paddingLeft: btnPadding * 1.8,
    marginTop: 1.5 * rem,
    backgroundColor: "#fff3",
    //TRANSITION
    //TRANLATE
  },
});
export const extractInpValues = (inputs: TextInputState): looseNum[] =>
  Object.values(inputs).map(inp => (inp as any).v);
export default function BtnCalc(): JSX.Element {
  const inputs = useSelector((s: OperationsStore) => s.inpSlice);
  const outputs = useSelector((s: OperationsStore) => s.outpSlice);
  const dispatch = useDispatch();
  const calculate = (): void => {
    // console.log("OUTPUTS");
    // console.log(outputs);
    // console.log("INPUTS");
    // console.log(inputs);
    const outpKeys = Object.keys(outputs);
    const sum = extractInpValues(inputs).reduce(
      (sumt: number, v) => (sumt += typeof v === "string" ? parseFinite(v as string) : v),
      0,
    );
    for (let i = 0; i < outpKeys.length; i++)
      dispatch(set({ k: outpKeys[i], v: `${sum * (i + 1)}` }));
  };
  return (
    <TouchableOpacity
      style={[global_styles.button, global_styles.button_btnInfo, btn_calc_styles.button]}
      onPress={calculate}
    >
      <Text style={btn_calc_styles._btnCalcValues}>Calculate</Text>
    </TouchableOpacity>
  );
}
