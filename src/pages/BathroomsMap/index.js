import React, {useEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native";

import MapView, {Marker} from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

import {getBathrooms} from "../../services/bathrooms";

export default function BathroomsMap() {
    const duration = 500, coordinates = {
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        latitude: -23.55042167187477,
        longitude: -46.63342312076841
    };
    const refMap = useRef(null)
    const [location, setLocation] = useState({...coordinates});
    const [bathrooms, setBathrooms] = useState([]);

    useEffect(() => {
        if (location && refMap && refMap.current) {
            refMap.current.animateToRegion(location, duration);
        }
    }, [location, refMap])

    useEffect(() => {
        const _getBathrooms = async () => {
            try {
                const {data} = await getBathrooms();
                const bathrooms = [];
                for (const bathroom of data) {
                    bathrooms.push((
                        <Marker.Animated
                            identifier={`${bathroom.id}`}
                            key={bathroom.id}
                            coordinate={{
                                latitudeDelta: 0.02,
                                longitudeDelta: 0.02,
                                latitude: bathroom.location.coordinates.lat,
                                longitude: bathroom.location.coordinates.lng,
                            }}
                        />
                    ))
                }
                setBathrooms(bathrooms);
                refMap.current.fitToSuppliedMarkers(bathrooms.map(({key}) => key));
            } catch (err) {
                console.log(err);
                alert("Ops...")
            }
        }
        _getBathrooms();
    }, [])

    useEffect(() => {
        Geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setLocation({latitude, longitude});
        })
    }, [])

    return (
        <SafeAreaView>
            <MapView
                ref={refMap}
                style={{width: "100%", height: "100%"}}
                initialRegion={coordinates}
            >
                <Marker
                    title={"Você está aqui!"}
                    coordinate={location}
                />
                {!!bathrooms && bathrooms}
            </MapView>
        </SafeAreaView>
    )
}