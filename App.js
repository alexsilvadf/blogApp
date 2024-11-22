import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "./src/Header";
import Main from "./src/Main";
import { useState } from "react";

export default function App() {
  const [post, setPost] = useState([
    {
      id: "1",
      imgPost: require("./assets/img/turistas.png"),
      titulo: "Turistando",
      texto: "Perdidos durante uma viagem, aventura que não acaba mais",
    },
    {
      id: "2",
      imgPost: require("./assets/img/almoco.jpg"),
      titulo: "Pausa para Almoço",
      texto: "Perdidos durante uma viagem, aventura que não acaba mais",
    },
    {
      id: "3",
      imgPost: require("./assets/img/barco.png"),
      titulo: "Passeio de Barco",
      texto: "Perdidos durante uma viagem, aventura que não acaba mais",
    },
    {
      id: "4",
      imgPost: require("./assets/img/embarque.png"),
      titulo: "O céu é o limite",
      texto: "Perdidos durante uma viagem, aventura que não acaba mais",
    },
    {
      id: "5",
      imgPost: require("./assets/img/mergulho.png"),
      titulo: "Mergulhando",
      texto: "Perdidos durante uma viagem, aventura que não acaba mais",
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={post}
        renderItem={({item}) => <Main data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
