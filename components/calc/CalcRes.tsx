import { CalcElProps } from "../../lib/declarations/components";
import { Text, View, StyleSheet, ScaledSize } from "react-native";
import { rem, vw } from "../../lib/constants";
import { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import { global_styles } from "../../assets/styles/global_styles";
import { useDispatch, useSelector } from "react-redux";
import { set, remove } from "../../redux/slices/outpSlice";
import { OperationsStore } from "../../lib/declarations/providerLocal";
import { calc_inp_styles } from "./CalcInp";
export const styles = StyleSheet.create({
  _divResult_n_resultOutput: {
    color: "#fff",
    fontSize: 0.7 * rem,
    overflow: "scroll",
    verticalAlign: "middle",
  },
});
export default function CalcRes(props: CalcElProps): JSX.Element {
  const outpLabRef = useRef<Text>(null);
  const outpRef = useRef<Text>(null);
  const [curW, setW] = useState(vw);
  const labText = props.txt
    .split(/(?=[A-Z])/g)
    .map((fragment, i) =>
      i === 0
        ? fragment.charAt(0).toUpperCase() + fragment.slice(1).toLowerCase()
        : /^\s*of\s*$|^\s*from\s*$|^\s*for\s*$|^\s*a\s*$|^\s*in\s*$/i.test(fragment)
        ? fragment.toLowerCase()
        : fragment.charAt(0).toUpperCase() + fragment.slice(1).toLowerCase(),
    )
    .join(" ")
    .replace(/pearsonss/gi, "pearson's");
  const normLabText = labText.toLowerCase().replaceAll(" ", "_") || "#NO_LABEL";
  const dispatchOperation = useDispatch();
  const iniNum = useSelector((s: OperationsStore) => s.inpSlice[`number__${props.labKey}`]?.v);
  const num = useSelector((s: OperationsStore) => s.outpSlice[normLabText]?.v || iniNum);
  useEffect(() => {
    try {
      if (!outpLabRef.current) {
        console.error(`No Output Label Reference detected.`);
        return;
      }
      if (!outpRef.current) {
        console.error(`No Output Element Reference available.`);
        return;
      }
      dispatchOperation(
        set({
          k: normLabText,
          v: num,
        }),
      );
      return () => {
        dispatchOperation(
          remove({
            k: normLabText,
            v: num,
          }),
        );
      };
    } catch (e) {
      console.error(`Error executing useEffect for outpRef:\n${(e as Error).message}`);
    }
  }, [outpRef]);
  useEffect(() => {
    const handleResize = ({ window }: { window: ScaledSize }) => setW(window.width);
    const sub = Dimensions.addEventListener("change", handleResize);
    return () => sub?.remove();
  }, [curW]);
  return (
    <View style={{ width: 0.25 * curW }}>
      <Text
        ref={outpLabRef}
        style={[global_styles.label, global_styles._divResult_nlabel, calc_inp_styles.inputLab]}
      >
        {labText}
      </Text>
      <Text
        ref={outpRef}
        style={[
          styles._divResult_n_resultOutput,
          global_styles.output,
          global_styles._divResult_n_formControl,
          calc_inp_styles.input,
        ]}
      >
        {num}
      </Text>
    </View>
  );
}
