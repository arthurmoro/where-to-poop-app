import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { Provider } from "react-native-paper";
import { getBathrooms } from "../../services/bathrooms";
import BathroomCard from "./BathroomCard";

const Bathrooms = () => {
  const [bathrooms, setBathrooms] = useState([]);

  const loadBathrooms = () => {
    getBathrooms().then(({ data }) => {
      setBathrooms(data)
    }).catch(err => {
      console.log(err)
    });
  }

  useEffect(() => {
    loadBathrooms();
  }, [])



  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={bathrooms}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <BathroomCard bathroom={item} />}
        />
      </SafeAreaView>
    </Provider>
  )
}

export default Bathrooms