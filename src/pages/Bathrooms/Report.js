import React, { useState } from 'react'
import { View } from 'react-native'
import { } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Modal,
  IconButton,
  Button,
  Portal,
  Card,
  Title,
  Dialog,
  TextInput
} from 'react-native-paper';

const Reviews = ({ name, showModal, onDismiss }) => {
  const [rating, setRating] = useState(0);
  const [responseText, setResponseText] = useState("")

  return (
    <Portal>
      <Modal
        onDismiss={() => {
          onDismiss &&
            typeof onDismiss === "function" &&
            onDismiss()
        }}
        visible={showModal} style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Card style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Title>Qual o problema com o estabelecimento?</Title>
          <TextInput />
          <View style={{ padding: 16, flexDirection: "row" }}>
            {
              [1, 2, 3, 4, 5].map(value => {
                let color;
                if (rating && rating <= 3) color = "red"
                if (rating && rating > 3) color = "green"
                if (rating < value) color = "black"
                return (
                  <IconButton
                    key={value}
                    icon={"star"}

                    color={color}
                    style={{
                      opacity: rating >= value ? 1 : 0.3,
                    }}
                    size={20}
                    onPress={() => setRating(value)} />
                )
              })
            }
          </View>
          <TextInput />
          <Button
            onPress={() => setResponseText("Obrigado. Iremos avaliar a sua denúncia!")}
          >
            Enviar reclamação
          </Button>
        </Card>
      </Modal>
      <Dialog
        visible={!!responseText}
        onDismiss={() => setResponseText("")}
      >
        <Dialog.Content style={{
          padding: 16,
          alignItems: "center"
        }}>

          <Icon
            style={{
              fontSize: 56,
              justifyContent: "center",
              alignItems: "center"
            }}
            color={"green"}
            name="emoticon-poop"
          />
          <Title>{responseText}</Title>
        </Dialog.Content>
      </Dialog >
    </Portal >
  )
}

export default Reviews;