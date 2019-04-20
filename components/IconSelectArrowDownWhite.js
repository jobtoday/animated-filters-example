import React from "react";
import { Image } from "react-native";

const imageSource = require("../assets/select-arrow-down-white.png");

const IconSelectArrowDownBlue = ({ style }: { style?: Style }) => (
  <Image source={imageSource} style={style} />
);

export default IconSelectArrowDownBlue;
