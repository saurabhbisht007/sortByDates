import { StyleSheet, View } from "react-native";
import React from "react";

const Rect = ({date}) => {
  return <View style={styles.container}>{date && date.toString()}</View>;
};

export default Rect;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    width: 200,
    backgroundColor: "#05BFDB",
  },
});
