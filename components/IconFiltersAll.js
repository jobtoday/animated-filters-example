import React from "react";
import { Image } from "react-native";

const imageSource = require("../assets/filters-all.png");

const IconSelectArrowDownBlue = ({ style }) => (
  <Image source={imageSource} style={[style, { width: 24, height: 24 }]} />
);

export default IconSelectArrowDownBlue;
