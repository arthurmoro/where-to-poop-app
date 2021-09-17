import React from "react"
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bathrooms from "./pages/Bathrooms";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Banheiros por perto" }}
          name="Bathrooms"
          component={Bathrooms}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}