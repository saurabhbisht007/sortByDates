import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback } from 'react-native'
import {useState} from 'react'
import { Ionicons } from "@expo/vector-icons";

const Icon = () => {
  const [showDropdown, setShowdropdown] = useState(false);

  const hideDropdown = () => {
    setShowdropdown(false);
  };

  const showDropdownOnPressIn = () => {
    setShowDropdown(true);
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={showDropdownOnPressIn}
      // onPress={hideDropdown}
    >
      <View style={{ flex: 1, width: 400, marginTop: 50 }}>
        <Pressable
          onPress={() => setShowdropdown(!showDropdown)}
          style={styles.container}
        >
          <Ionicons name="copy-outline" size={24} color="black" />
          <Text>Group by</Text>
          <Ionicons name="ios-chevron-down" size={24} color="black" />
        </Pressable>
        {showDropdown && (
          <View style={styles.dropContainer}>
            <Text style={styles.item}>None</Text>
            <Text style={styles.item}>Time</Text>
            <Text style={styles.item}>Context</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Icon

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
    // borderWidth: 1,
    padding: 12,
    borderRadius: 100,
    backgroundColor: "#e0e0e0",
    color: "#656565",
  },
  dropContainer: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#6393D1",
    padding: 15,
    marginTop: 5,
    width:200,
  },
  item:{
    padding: 5,
  }
});