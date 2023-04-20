import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Rect from "./components/Rect"
import { useState } from 'react';

export default function App() {
  const dates = [
    new Date("2022-01-01"),
    new Date("2022-03-01"),
    new Date("2022-02-01"),
  ];
   const [sortedDates, setSortedDates] = useState([...dates]);
   const [ascendingOrder, setAscendingOrder] = useState(true);

   


   const sortDates = () => {
     const newOrder = !ascendingOrder;
     setAscendingOrder(newOrder);
     const sorted = [...dates].sort((a, b) => (newOrder ? a - b : b - a));
     setSortedDates(sorted);
   };

   const renderItem = ({ item }) => (
     <Rect date={item} /> 
   );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={sortedDates}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    <Pressable style={styles.button} onPress={sortDates}>
      <Text>
        Sort by Dates
      </Text>
    </Pressable>
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
