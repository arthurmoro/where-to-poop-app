import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native";
import BathroomGallery from "./BathroomGallery"
import styles from "./styles";

import { Button, Card, IconButton } from "react-native-paper"
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
      <Card style={styles.bathroomCard}>
        <Card.Title
          title={bathroom?.location?.place}
          right={(props) => (
            <View style={{ flexDirection: "row" }}>
              <IconButton
                icon="heart"
                color={bathroom.user?.fav ? "red" : "black"}
                onPress={() => { alert("Adicionado aos favoritos") }}
              />
              <IconButton
                icon="dots-vertical"
                color={bathroom.user?.fav ? "red" : "black"}
                onPress={() => { alert("Abrir popup de extra") }}
              />
            </View>
          )}
        />

        <Card.Content>
          <Text style={styles.textStyle}>
            Local: {bathroom?.location?.place}
          </Text>
          <Text style={styles.textStyle}>Endereço: {bathroom?.location?.formattedAddress || "Não cadastrado :("}</Text>
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