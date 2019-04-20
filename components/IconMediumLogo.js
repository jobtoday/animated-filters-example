import React from "react";
import { Image } from "react-native";

const imageSource = require("../assets/medium-logo.png");

const IconMediumLogo = ({ style }) => (
  <Image source={imageSource} style={[style, { width: 32, height: 32 }]} />
);

export default IconMediumLogo;
