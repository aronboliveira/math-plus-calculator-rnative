import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useRef } from "react";
import { global_styles, primWh } from "../../assets/styles/global_styles";
import replaced_styles from "../../assets/styles/replaced_styles";
import { rem, vw } from "../../lib/constants";
export const login_wrapper_styles = StyleSheet.create({
  header_nany: {},
  header_nbutton: {
    marginBottom: 0,
  },
  header_n_biBtn: {
    color: "rgba(223, 221, 221, 0.745)",
    paddingRight: rem,
    fontWeight: 700,
  },
  header_n_title: {
    paddingBottom: rem,
    paddingRight: 0.12 * vw,
    color: primWh,
  },
  header_n__dlgHeaderRoot: {
    position: "static",
  },
});
export default function LoginWrapper(): JSX.Element {
  const modalRef = useRef<Modal | null>(null);
  const [shouldShowLogin, setLogin] = useState<boolean>(false);
  return (
    <View style={login_wrapper_styles.header_nany}>
      <TouchableOpacity
        style={[
          login_wrapper_styles.header_nany,
          login_wrapper_styles.header_nbutton,
          login_wrapper_styles.header_n_biBtn,
          global_styles.button,
        ]}
        onPress={() => setLogin(!shouldShowLogin)}
      >
        <Text
          style={[
            login_wrapper_styles.header_nany,
            login_wrapper_styles.header_nbutton,
            login_wrapper_styles.header_n_biBtn,
            replaced_styles.strong,
          ]}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Modal
        ref={modalRef}
        style={[global_styles.dialog_modalContent]}
        animationType='slide'
        transparent={true}
        visible={shouldShowLogin}
        onRequestClose={() => setLogin(!shouldShowLogin)}
      >
        <View style={global_styles._centeredView}>
          <Text>Dialog montado</Text>
          <TouchableOpacity
            style={[
              global_styles.button,
              login_wrapper_styles.header_nbutton,
              login_wrapper_styles.header_n_biBtn,
            ]}
            onPress={() => setLogin(!shouldShowLogin)}
          ></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
