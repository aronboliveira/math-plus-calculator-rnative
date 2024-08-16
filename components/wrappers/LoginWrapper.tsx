import { View, Modal, Text, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import { headerStyles } from "../main/Header";
import { global_styles } from "../../assets/styles/global_styles";
import replaced_styles from "../../assets/styles/replaced_styles";
export default function LoginWrapper(): JSX.Element {
  const modalRef = useRef<Modal | null>(null);
  const [shouldShowLogin, setLogin] = useState<boolean>(false);
  return (
    <View style={headerStyles.header_nany}>
      <TouchableOpacity
        style={[
          headerStyles.header_nany,
          headerStyles.header_nbutton,
          headerStyles.header_n_biBtn,
          global_styles.button,
        ]}
        onPress={() => setLogin(!shouldShowLogin)}
      >
        <Text
          style={[
            headerStyles.header_nany,
            headerStyles.header_nbutton,
            headerStyles.header_n_biBtn,
            replaced_styles.strong,
          ]}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Modal
        ref={modalRef}
        style={[global_styles.dialog_modalContent]}
        animationType="slide"
        transparent={true}
        visible={shouldShowLogin}
        onRequestClose={() => setLogin(!shouldShowLogin)}
      >
        <View style={global_styles._centeredView}>
          <Text>Dialog montado</Text>
          <TouchableOpacity
            style={[
              global_styles.button,
              headerStyles.header_nbutton,
              headerStyles.header_n_biBtn,
            ]}
            onPress={() => setLogin(!shouldShowLogin)}
          ></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
