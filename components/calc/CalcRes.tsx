import { CalcElProps } from "../../lib/declarations/components";
import { Text, View, StyleSheet, ScaledSize } from "react-native";
import { rem, vw } from "../../lib/constants";
import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import replaced_styles from "../../assets/styles/replaced_styles";
import { global_styles } from "../../assets/styles/global_styles";
export const styles = StyleSheet.create({
  _divResult_n_resultOutput: {
    color: "#fff",
    fontSize: 0.7 * rem,
    overflow: "scroll",
    verticalAlign: "middle",
  },
});
export default function CalcRes(props: CalcElProps): JSX.Element {
  const [curW, setW] = useState(vw);
  useEffect(() => {
    const handleResize = ({ window }: { window: ScaledSize }) =>
      setW(window.width);
    const sub = Dimensions.addEventListener("change", handleResize);
    //TODO PASSAR A REF DAS OPERAÇÕES
    // props.txt && addOprtTarg(txt, this.$el);
    return () => sub?.remove();
  }, [curW]);
  return (
    <View style={{ width: 0.25 * curW }}>
      <Text style={global_styles._divResult_nlabel}>
        {props.txt
          .split(/(?=[A-Z])/g)
          .map((fragment, i) =>
            i === 0
              ? fragment.charAt(0).toUpperCase() +
                fragment.slice(1).toLowerCase()
              : /^\s*of\s*$|^\s*from\s*$|^\s*for\s*$|^\s*a\s*$|^\s*in\s*$/i.test(
                  fragment
                )
              ? fragment.toLowerCase()
              : fragment.charAt(0).toUpperCase() +
                fragment.slice(1).toLowerCase()
          )
          .join(" ")
          .replace(/pearsonss/gi, "pearson's")}
      </Text>
      <Text
        style={[
          styles._divResult_n_resultOutput,
          global_styles._divResult_n_formControl,
        ]}
      ></Text>
    </View>
  );
}
