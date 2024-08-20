import { View, StyleSheet, Text, ScrollView } from "react-native";
import { ResultsProps } from "../../lib/declarations/components";
import CalcRes from "../calc/CalcRes";
import TextTest from "../tests/Test";
export const results_grid_styles = StyleSheet.create({
  resultsGrid: {},
});
export default function ResultsGrid({ outpList }: ResultsProps): JSX.Element {
  return (
    <View style={results_grid_styles.resultsGrid}>
      {outpList.map((t, i) => (
        <CalcRes txt={t} key={`outp__${i}`} labKey={i.toString()} />
      ))}
    </View>
  );
}
