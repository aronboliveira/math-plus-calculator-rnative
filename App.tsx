import { StyleSheet, View } from "react-native";
import Header from "./components/main/Header";
import { global_styles } from "./assets/styles/global_styles";
import { useRef } from "react";
import { nView } from "./lib/declarations/types";
import DivMain from "./components/main/DivMain";

export default function App() {
  const dlgRoot = useRef<nView>(null);
  return (
    <View style={global_styles.body}>
      <View style={styles.__indexRoot}>
        <Header />
        <View>
          <View style={[global_styles.section, global_styles.__sectionMain]}>
            <DivMain inpList={["Input"]} outpList={["Output"]} />
          </View>
        </View>
        <View ref={dlgRoot}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  __indexRoot: {
    position: "relative",
  },
});
