import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { set, remove } from "../../redux/slices/inpSlice";
import { CalcInpProps } from "../../lib/declarations/components";
import { global_styles, primBl, primWh, tertWh } from "../../assets/styles/global_styles";
import { btnPadding, inpPadding, rem, vw } from "../../lib/constants";
export const calc_inp_styles = StyleSheet.create({
  input: {
    width: 0.8 * vw,
    borderWidth: 0.05 * rem,
    borderRadius: 0.2 * rem,
    borderTopColor: "#fff5",
    borderRightColor: "#ffd1",
    borderBottomColor: "#ffd1",
    borderLeftColor: "#fff6",
    paddingTop: inpPadding,
    paddingRight: inpPadding,
    paddingBottom: inpPadding,
    paddingLeft: inpPadding * 5,
  },
});
export default function CalcInp(props: CalcInpProps): JSX.Element {
  const labText = props.txt
    .split(/(?=[A-Z])/g)
    .map((fragment, i) =>
      i === 0
        ? fragment.charAt(0).toUpperCase() + fragment.slice(1).toLowerCase()
        : /\s*of\s*|\s*from\s*|\s*for\s*|\s*a\s*|\s*in\s*/gi.test(fragment)
        ? fragment.toLowerCase()
        : fragment.charAt(0).toUpperCase() + fragment.slice(1).toLowerCase(),
    )
    .join(" ")
    .replace(/pearsonss/gi, "pearson's");
  const normLabText = labText.toLowerCase().replaceAll(" ", "_");
  const [num, setNum] = useState<string>("");
  const inpRef = useRef<TextInput>(null);
  const numDispatch = useDispatch();
  const dispatchNum = (
    k: string = "#ERR",
    v: string = "0",
    // ref: MutableRefObject<TextInput | null>,
  ): void => {
    setNum(v || "0");
    numDispatch(
      set({
        k,
        v: v || "0",
        // ref
      }),
    );
  };
  // const inps = useSelector(store => store.inpSlice);
  useEffect(() => {
    try {
      if (!inpRef.current) {
        console.error(`No available reference for input.`);
        return;
      }
      dispatchNum(normLabText, num || "0");
      return () => {
        numDispatch(
          remove({
            k: labText,
            v: num,
            // ref: inpRef
          }),
        );
      };
    } catch (e) {
      console.error(`Error executing useEffect for number update:\n${(e as Error).message}`);
    }
  }, [num]);
  return (
    <View>
      <Text style={[global_styles.label, global_styles._divInp_nlabel]}>{labText}</Text>
      <TextInput
        keyboardType={props.type === "numeric" ? props.type : "default"}
        style={[global_styles._divInp_n_formControl, global_styles.inpEntry, calc_inp_styles.input]}
        placeholder={props.ph}
        placeholderTextColor={primWh}
        selectionColor={primBl}
        ref={inpRef}
        value={num}
        onChangeText={ev => {
          dispatchNum(
            normLabText,
            ev,
            // inpRef
          );
        }}
        onFocus={ev => ((ev.currentTarget as any)["color"] = tertWh)}
        onBlur={ev => ((ev.currentTarget as any)["color"] = primWh)}
      />
    </View>
  );
}
