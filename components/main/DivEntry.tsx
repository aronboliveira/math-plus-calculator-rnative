import { View } from "react-native";
import { EntriesProps } from "../../lib/declarations/components";
import CalcInp from "../calc/CalcInp";
export default function DivEntry({ inpList }: EntriesProps): JSX.Element {
  return (
    <View>
      {inpList.map((inp, i) => (
        <CalcInp key={`inp__${i}`} txt={inp} labKey={i.toString()} />
      ))}
    </View>
  );
}
