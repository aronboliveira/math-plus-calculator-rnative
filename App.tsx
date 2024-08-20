import { StyleSheet, View } from "react-native";
import { global_styles } from "./assets/styles/global_styles";
import { useRef } from "react";
import { nView } from "./lib/declarations/types";
import Header from "./components/main/Header";
import DivMain from "./components/main/DivMain";
export const app_styles = StyleSheet.create({
  __indexRoot: {
    overflow: "scroll",
  },
});
export default function App() {
  const dlgRoot = useRef<nView>(null);
  return (
    <View style={global_styles.body}>
      <View style={app_styles.__indexRoot}>
        <Header />
        <View>
          <View style={[global_styles.section, global_styles.__sectionMain]}>
            <DivMain
              inpList={["Number", "Number", "Number", "Number", "Number"]}
              outpList={[
                "Linear Formula",
                "Discriminant",
                "Number of Roots",
                "Quadratic Formula",
                "Cubic Formula",
                "Difference of Squares",
                "Least Common Multiple",
                "Greatest Common Divisor",
                "Common Difference of Arithmetic Series",
                "Reason for Geometric Series",
                "Nth term of Arithmetic Series",
                "Sum of Arithmetic Series",
                "Nth Term of Geometric Series",
                "Sum of Geometric Series",
                "Binomial Theorem",
              ]}
            />
          </View>
        </View>
        <View ref={dlgRoot}></View>
      </View>
    </View>
  );
}
