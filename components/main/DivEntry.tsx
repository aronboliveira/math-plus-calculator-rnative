import { View, StyleSheet } from "react-native";
import { EntriesProps } from "../../lib/declarations/components";
import CalcInp from "../calc/CalcInp";
export const div_entry_styles = StyleSheet.create({
  divEntry: {},
});
export default function DivEntry({ inpList }: EntriesProps): JSX.Element {
  return (
    <View style={div_entry_styles.divEntry}>
      {inpList.map((inp, i) => (
        <CalcInp key={`inp__${i}`} txt={inp} labKey={i.toString()} type='numeric' />
      ))}
    </View>
  );
}
