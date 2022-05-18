import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBarComponent = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        width: "85%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#DDB58E",
        alignSelf: "center",
        shadowColor: "grey",
        shadowOpacity: 0.6,
        shadowRadius: 8,
        flexDirection: "row",
      }}
    >
      <TextInput
        placeholder="Sök"
        placeholderTextColor="#DDB58E"
        selectionColor="#DDB58E"
        color="#DDB58E"
        style={{
          height: 63,
          flex: 1,
          padding: 10,
          marginLeft: 5,
          fontSize: 17,
        }}
      />
      <View style={styles.lineNearIcon}></View>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="search" size={30} color="#DDB58E" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  iconContainer: {
    width: 55,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lineNearIcon: {
    width: 1,
    height: 50,
    borderLeftWidth: 1,
    borderColor: "#DDB58E",
    opacity: 0.18,
  },
});
