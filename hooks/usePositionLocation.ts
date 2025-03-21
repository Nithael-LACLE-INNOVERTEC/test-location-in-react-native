import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { UserLocationProps } from "./useCurrentLocation";


const initialPosition = {
    latitude: 6.1300,
    longitude: 1.2200,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}; // Position initiale de l'utilisateur

const usePositionLocation = () => {
    const [location, setLocation] = useState<UserLocationProps>(initialPosition);

    // Get User Current Position =================================================
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error("L'autorisation d'accéder à votre emplacement a été refusée");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log("Location current ", {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    

    console.log("Location current ", location);

    return { location};
}

export default usePositionLocation;