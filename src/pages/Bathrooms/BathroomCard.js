import React, { useState } from "react"
import { Text, View } from "react-native";
import BathroomGallery from "./BathroomGallery"
import styles from "./styles";

import { Button, Card, Title } from "react-native-paper"
import ReviewModal from "./Reviews";


const BathroomCard = ({ bathroom }) => {
  const [openRating, setOpenRating] = useState(false);

  const onDismiss = () => setOpenRating(false)

  return (
    <>
      <ReviewModal
        onDismiss={onDismiss}
        showModal={openRating}
        name={bathroom?.location?.place}
      />
      <Card style={{ margin: 16, width: 360 }}>
        <Card.Title><Title>{bathroom?.location?.place}</Title></Card.Title>
        <Card.Content>
          <Title>
            Local: {bathroom?.location?.place}
          </Title>
          <View style={{ flex: 1 }}>
            {bathroom.pictures && <BathroomGallery pictures={bathroom.pictures} />}
          </View>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => setOpenRating(true)}>Avaliar</Button>
          <Button>Reportar</Button>
        </Card.Actions>
      </Card>
    </>
  )
}
export default BathroomCard;