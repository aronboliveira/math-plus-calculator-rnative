import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { CalcInpProps } from "../../lib/declarations/components";
import { global_styles, primBl, primWh, tertWh } from "../../assets/styles/global_styles";

export default function CalcInp(props: CalcInpProps): JSX.Element {
  const [num, setNum] = useState<string>("0");
  return (
    <View>
      <Text style={[global_styles.label, global_styles._divInp_nlabel]}>
        {props.txt
          .split(/(?=[A-Z])/g)
          .map((fragment, i) =>
            i === 0
              ? fragment.charAt(0).toUpperCase() + fragment.slice(1).toLowerCase()
              : /\s*of\s*|\s*from\s*|\s*for\s*|\s*a\s*|\s*in\s*/gi.test(fragment)
              ? fragment.toLowerCase()
              : fragment.charAt(0).toUpperCase() + fragment.slice(1).toLowerCase(),
          )
          .join(" ")
          .replace(/pearsonss/gi, "pearson's")}
      </Text>
      <TextInput
        keyboardType={props.type === "numeric" ? props.type : "default"}
        style={[global_styles._divInp_n_formControl, global_styles.inpEntry]}
        placeholder={props.ph}
        placeholderTextColor={primWh}
        selectionColor={primBl}
        value={num}
        onChangeText={ev => setNum(ev)}
        onFocus={ev => ((ev.currentTarget as any)["color"] = tertWh)}
        onBlur={ev => ((ev.currentTarget as any)["color"] = primWh)}
      />
    </View>
  );
}
