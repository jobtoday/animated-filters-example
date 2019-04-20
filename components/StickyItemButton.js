// @flow
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import IconFiltersAll from "./IconFiltersAll";
import ListItemButton from "./ListItemButton";

type Props = {|
  i18n: I18n,
  activeFiltersCount?: number,
  onPress: () => void
|};

const Counter = ({ count }: { count: number }) => (
  <View style={styles.counter}>
    <Text style={styles.counterText}>{count}</Text>
  </View>
);

const Icon = () => (
  <View style={styles.icon}>
    <IconFiltersAll />
  </View>
);

const StickyItemButton = ({ activeFiltersCount, onPress }: Props) => (
  <ListItemButton
    onPress={onPress}
    text="Filters"
    icon={
      activeFiltersCount ? <Counter count={activeFiltersCount} /> : <Icon />
    }
  />
);

const styles = StyleSheet.create({
  counter: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginLeft: -4,
    marginRight: 7,
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  counterText: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 15,
    color: "#0e54ff"
  },
  icon: {
    marginLeft: -6,
    marginRight: 5
  }
});

export default StickyItemButton;
