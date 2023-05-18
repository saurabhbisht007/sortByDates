import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increaseSize } from "../store/reducer";

const App = () => {
  const boxSizes = useSelector((state) => state.box.boxSizes);
  const activeIndex = useSelector((state) => state.box.activeIndex);
  const dispatch = useDispatch();

  const handleIncreaseSize = (index) => {
    dispatch(increaseSize({ index }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.box,
          {
            width: boxSizes[0],
            height: boxSizes[0],
            backgroundColor: activeIndex === 0 ? "red" : "blue",
          },
        ]}
        onPress={() => handleIncreaseSize(0)}
      />
      <TouchableOpacity
        style={[
          styles.box,
          {
            width: boxSizes[1],
            height: boxSizes[1],
            backgroundColor: activeIndex === 1 ? "red" : "blue",
          },
        ]}
        onPress={() => handleIncreaseSize(1)}
      />
      <TouchableOpacity
        style={[
          styles.box,
          {
            width: boxSizes[2],
            height: boxSizes[2],
            backgroundColor: activeIndex === 2 ? "red" : "blue",
          },
        ]}
        onPress={() => handleIncreaseSize(2)}
      />
      <TouchableOpacity
        style={[
          styles.box,
          {
            width: boxSizes[3],
            height: boxSizes[3],
            backgroundColor: activeIndex === 3 ? "red" : "blue",
          },
        ]}
        onPress={() => handleIncreaseSize(3)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    margin: 10,
  },
});

export default App;
