import { View } from "react-native";
import { ResultsProps } from "../../lib/declarations/components";
import CalcRes from "../calc/CalcRes";
export default function ResultsGrid({ outpList }: ResultsProps): JSX.Element {
  return (
    <View>
      {outpList.map((t, i) => (
        <CalcRes txt={t} key={`outp__${i}`} />
      ))}
    </View>
  );
}
