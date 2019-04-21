import React from "react";
import {
  Dimensions,
  Linking,
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import IconMediumLogo from "./components/IconMediumLogo";
import Filters from "./Filters";

const filters = [
  {
    name: "employmentTypes",
    label: "Employment type",
    type: "MULTI_CHOICE"
  },
  {
    name: "immediateStart",
    label: "Immediate start",
    type: "RADIO_BUTTON"
  },
  {
    name: "experienceNotRequired",
    label: "No experience",
    type: "RADIO_BUTTON"
  }
];

const MEDIUM_ARTICLE_URL = "https://medium.com/p/2bdde7a4f16c/";
const SCREEN_WIDTH = Dimensions.get("screen").width;

export default class App extends React.Component {
  openArticle() {
    Linking.canOpenURL(MEDIUM_ARTICLE_URL)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + MEDIUM_ARTICLE_URL);
        } else {
          return Linking.openURL(MEDIUM_ARTICLE_URL);
        }
      })
      .catch(err => console.error("An error occurred", err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Animated Filters Bar</Text>
        </View>
        <Filters
          filters={filters}
          activeFiltersCount={0}
          activeFiltersMap={{}}
        />
        <View style={styles.body}>
          <TouchableOpacity style={styles.link} onPress={this.openArticle}>
            <IconMediumLogo />
            <Text style={styles.linkText}>Back to the Article</Text>
          </TouchableOpacity>
          {SCREEN_WIDTH > 500 && (
            <Text style={styles.tip}>
              If you opened example on desktop, please, switch to mobile view in
              dev tools and reload the page.
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: Platform.select({ web: 20, default: 40 }),
    paddingBottom: 15,
    backgroundColor: "#2252C7"
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 20,
    color: "#FFFFFF"
  },
  body: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 30
  },
  link: {
    flexDirection: "row",
    alignItems: "center"
  },
  linkText: {
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: Platform.select({ web: "Serif", default: undefined }),
    textDecorationLine: "underline"
  },
  tip: {
    width: 400,
    marginTop: 100,
    textAlign: "center",
    color: "#777"
  }
});
