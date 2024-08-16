import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { rem, vh, vw } from "../../lib/constants";
import { global_styles } from "../../assets/styles/global_styles";
export const accordion_list_styles = StyleSheet.create({
  _accordionNav: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    flexGrow: 1,
    position: "absolute",
    top: 3.05 * rem,
    right: 0,
    bottom: -0.625 * rem,
    zIndex: 99,
    width: 0,
    maxWidth: 0.75 * vw,
    paddingTop: rem,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: rem,
    gap: 0.01 * vh,
    backgroundColor: "#242527",
    //TRANSFORM
    //TRANSITION
    //ANIMATION
    // height:fit-content
  },
  _accordionNav_nany: {
    width: 0,
  },
  _accordionNav_shown: {
    overflow: "hidden",
    //TRANSFORM
  },
  _accordionNav_shown_nany: {},
  _accordioNav_n_accordionList: {
    paddingRight: rem,
  },
  _accordioNav_n_accordionButton: {
    color: "#ffff",
  },
});
export default function AccordionList({
  n_titles,
}: {
  n_titles: string[];
}): JSX.Element {
  const routeToOprtGrp = (el: TouchableOpacity): void => {};
  return (
    <View style={[accordion_list_styles._accordionNav]}>
      <FlatList
        style={accordion_list_styles._accordionNav_nany}
        data={n_titles}
        renderItem={({ item }: { item: string }) => (
          <View style={accordion_list_styles._accordionNav_nany}>
            <TouchableOpacity
              style={[
                global_styles.button,
                accordion_list_styles._accordionNav_nany,
              ]}
              onPress={(ev) =>
                routeToOprtGrp(ev.currentTarget as TouchableOpacity)
              }
            >
              <Text
                style={[
                  accordion_list_styles._accordionNav_nany,
                  accordion_list_styles._accordioNav_n_accordionButton,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(_, i) => `__item_${i}`}
      >
        {n_titles.map((title) => (
          <View style={accordion_list_styles._accordionNav_nany}>
            <TouchableOpacity
              style={[
                global_styles.button,
                accordion_list_styles._accordionNav_nany,
              ]}
              onPress={(ev) =>
                routeToOprtGrp(ev.currentTarget as TouchableOpacity)
              }
            >
              <Text
                style={[
                  accordion_list_styles._accordionNav_nany,
                  accordion_list_styles._accordioNav_n_accordionButton,
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </FlatList>
    </View>
  );
}
