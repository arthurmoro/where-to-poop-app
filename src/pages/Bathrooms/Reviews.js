import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Modal,
  IconButton,
  Button,
  Portal,
  Card,
  Text,
  Title,
  Dialog
} from 'react-native-paper';

const Reviews = ({ name, showModal, onDismiss }) => {
  const [rating, setRating] = useState(0);
  const [responseText, setResponseText] = useState("")

  return (
    <Portal>
      <Modal
        onDismiss={() => {
          onDismiss && typeof onDismiss === "function" && onDismiss()
          setRating(0)
        }}
        visible={showModal} style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Card style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Title>Sua avaliação é importante</Title>
          <Text>Avalie o <Text style={{ fontWeight: "bold" }}>{name}</Text></Text>
          <View style={{ padding: 16, flexDirection: "row" }}>
            {
              [1, 2, 3, 4, 5].map(value => {
                return (
                  <IconButton
                    key={value}
                    icon={"star"}

                    color={"black"}
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
            onPress={() => setResponseText("Obrigado pela sua avaliação!")}
          >
            Enviar Avaliação
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