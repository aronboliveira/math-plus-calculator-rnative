import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { global_styles } from "../../assets/styles/global_styles";
import { useSelector } from "react-redux";
import { OperationsStore } from "../../lib/declarations/providerLocal";
import { btnPadding, rem } from "../../lib/constants";
import { useDispatch } from "react-redux";
import { set } from "../../redux/slices/outpSlice";
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
    marginTop: 0.75 * rem,
    backgroundColor: "#fff3",
    //TRANSITION
    //TRANLATE
  },
});
export default function BtnCalc(): JSX.Element {
  const inputs = useSelector((s: OperationsStore) => s.inpSlice);
  const outputs = useSelector((s: OperationsStore) => s.outpSlice);
  const dispatch = useDispatch();
  const calculate = (): void => {
    console.log("INPUT VALUE");
    console.log(inputs?.input?.v);
    console.log("OUTPUT");
    console.log(outputs?.output?.v);
    if (inputs.input.v) {
      dispatch(set({ k: "output", v: inputs.input.v }));
      console.log(outputs.output.v);
    }
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
