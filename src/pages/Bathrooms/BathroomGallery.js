import React, { useState } from "react";
import { Image, TouchableWithoutFeedback, ScrollView, View } from "react-native";
import { Modal, Dialog, Portal } from "react-native-paper";

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
      <ScrollView
        horizontal={true}
        onScrollAnimationEnd={true}
        snapToEnd={true}
        style={{ flex: 1 }}>
        {pictures.map(uri => {
          return (
            <TouchableWithoutFeedback
              onPress={() => showImg(uri)}>
              <Image
                key={uri}
                style={{ height: 200, width: 200, margin: 10, flex: 1 }}
                source={{ uri }} />
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
      <Portal>
        <Dialog
          visible={showDialog}
          onDismiss={() => hideImg()}
        >
          <Dialog.Content>
            <View>
              <Image
                source={{ uri: clickedImg }}
                resizeMethod="resize"
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: "100%",
                }}
              />
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  )
}

export default BathroomGallery