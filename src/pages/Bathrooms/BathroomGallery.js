import React, { useState } from "react";
import { Image, TouchableWithoutFeedback, ScrollView, View, FlatList } from "react-native";
import { Modal, Dialog, Portal, IconButton } from "react-native-paper";

const BathroomGallery = ({ pictures }) => {
  const [clickedImg, setImg] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const showImg = imgUrl => {
    setImg(imgUrl);
    setShowDialog(true)
  }

  const hideImg = () => {
    setShowDialog(false)
  }
  return (
    <>
      <FlatList
        horizontal={true}
        onScrollAnimationEnd={true}
        data={pictures}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => showImg(item)}>
              <Image
                key={item}
                style={{ height: 200, width: 200, marginRight: 8, marginTop: 8, marginBottom: 8 }}
                source={{ uri: item }} />
            </TouchableWithoutFeedback>
          )
        }}
      />
      <Portal>
        <Modal
          visible={showDialog}
          onDismiss={() => hideImg()}
          contentContainerStyle={{ padding: 16 }}
        >
          <Image
            source={{ uri: clickedImg }}
            style={{
              width: '100%',
              height: "100%",

            }}
          />
          <IconButton
            style={{
              backgroundColor: "gray",
              opacity: 0.8,
              position: "absolute",
              right: 24,
              top: 24
            }}
            icon="close"
            color={"white"}
            size={24}
            onPress={hideImg}
          />

        </Modal>
      </Portal>
    </>
  )
}

export default BathroomGallery