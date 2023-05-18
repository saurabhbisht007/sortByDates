import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import Icon from "./components/Icon"
import ReduxLearn from './components/reduxLearn';
import { Provider } from "react-redux";
import store from "./store/reducer";

export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ReduxLearn />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
