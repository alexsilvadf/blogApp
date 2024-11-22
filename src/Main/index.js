import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Main(props) {
  return (
    <View style={styles.main}>
      <Text style={styles.titulo}> {props.data.titulo} </Text>

      <Image style={styles.imgPost} source={props.data.imgPost} />

      <Text style={styles.texto}> {props.data.texto} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 25,
    color: "#2b50de",
    fontFamily: "Cochin",
    fontWeight: "bold",
    margin: 15
  },
  imgPost: {
    width: 400,
    height: 220,
  },
  texto:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5
  }
});
