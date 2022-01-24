import React from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Bathrooms from "./pages/Bathrooms";
import BathroomsMap from "./pages/BathroomsMap";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{title: "Onde recarregar?"}}
                    name="BathroomsMap"
                    component={BathroomsMap}
                />
                <Stack.Screen
                    options={{title: "Banheiros por perto"}}
                    name="Bathrooms"
                    component={Bathrooms}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}