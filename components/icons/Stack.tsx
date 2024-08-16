import Svg, { Path } from "react-native-svg";
import { Text } from "react-native";
export default function Stack(): JSX.Element {
  return (
    <Text>
      <Svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <Path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </Svg>
    </Text>
  );
}
