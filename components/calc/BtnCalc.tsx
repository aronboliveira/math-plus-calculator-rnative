import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { global_styles } from "../../assets/styles/global_styles";
export const btnCalcStyles = StyleSheet.create({
  _btnCalcValues: {
    fontWeight: 700,
    //TRANSITION
    //TRANLATE
  },
});
export default function BtnCalc(): JSX.Element {
  const calculate = (): void => {};
  return (
    <TouchableOpacity
      style={[global_styles.button, global_styles.button_btnInfo]}
      onPress={calculate}
    >
      <Text>Calculate</Text>
    </TouchableOpacity>
  );
}
