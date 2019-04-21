// @flow
import React, { type Node } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Platform
} from "react-native";

type Props = {
  active?: boolean,
  onPress: () => void,
  text: string,
  icon?: Node
};

const Touchable = Platform.select({
  web: ({ ...props }) => (
    <TouchableHighlight underlayColor="#6284d7" {...props} />
  ),
  default: TouchableOpacity
});

const ListItemButton = ({ active, onPress, text, icon }: Props) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];

  if (active) {
    containerStyle.push(styles.containerActive);
    textStyle.push(styles.textActive);
  }

  return (
    <Touchable
      style={styles.button}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <View style={containerStyle}>
        {icon && icon}
        <Text numberOfLines={1} ellipsizeMode="clip" style={textStyle}>
          {text}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: "#4E74D2"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 12
  },
  containerActive: {
    backgroundColor: "#FFFFFF"
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
    color: "#FFFFFF",
    ...Platform.select({ web: { textOverflow: "clip" }, default: {} })
  },
  textActive: {
    color: "#2252C7"
  }
});

export default ListItemButton;
