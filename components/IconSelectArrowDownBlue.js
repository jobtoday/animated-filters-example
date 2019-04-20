import React from "react";
import { Image } from "react-native";

const imageSource = require("../assets/select-arrow-down-blue.png");

const IconSelectArrowDownBlue = ({ style }: { style?: Style }) => (
  <Image source={imageSource} style={style} />
);

export default IconSelectArrowDownBlue;
