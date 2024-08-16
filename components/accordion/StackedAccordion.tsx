import { TouchableOpacity, StyleSheet } from "react-native";
import { rDlgProps } from "../../lib/declarations/interfaces";
import Stack from "../icons/Stack";
export const stackedAccordionStyles = StyleSheet.create({
  _accordionBtnToggle_nsvg: {},
});
export default function StackedAccordionBtn({
  dp,
  st,
}: rDlgProps): JSX.Element {
  return (
    <TouchableOpacity
      onFocus={(ev) => ((ev.currentTarget as any)["color"] = "white")}
      onBlur={(ev) => ((ev.currentTarget as any)["color"] = "grey")}
      onPress={() => dp(!st)}
    >
      <Stack />
    </TouchableOpacity>
  );
}
