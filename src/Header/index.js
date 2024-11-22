import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/img/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    marginTop: 40,
    alignItems: "center",
    borderBottomWidth: 0.2,
    width: 500,
    height: 120,
  },
  logo: {
    height: 100,
    width: 270,
    marginTop: 1,
  },
});
