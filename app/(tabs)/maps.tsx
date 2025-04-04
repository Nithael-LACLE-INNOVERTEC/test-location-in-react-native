import { StyleSheet, View} from 'react-native';
import React, { useState } from 'react';
import FakeData from '@/constants/FakeData';
import useCurrentLocation, { UserLocationProps } from '@/hooks/useCurrentLocation';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import BottomSheet from '@/components/component/BottomSheet';


// Données JSON simulées
const clients = FakeData.clients;

const maps = () => {

    // Hooks
    const { location} = useCurrentLocation();
    const [state, setState] = useState<UserLocationProps>(location);
    
    const onRegionChange = (region: UserLocationProps) => {
        setState(region);
    }
    
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ ...StyleSheet.absoluteFillObject}}
                initialRegion={(state as UserLocationProps | undefined)}
                // region={state}
                // onRegionChange={onRegionChange}
                loadingEnabled
                loadingIndicatorColor='#7F5235'
                loadingBackgroundColor= '#b87324ac'
                zoomControlEnabled
                showsMyLocationButton
                showsUserLocation
                showsCompass
                showsScale

            >
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                    title='Ma position actuelle'
                    description='Position INNOVERTEC-CONSULTING SARL'
                    // pinColor='blue'
                    onPress = {(data)=> console.log("Source : ", data)}
                />
                {/* {clients.map((client) => {
                    return (
                        <Marker
                            key={client.id}
                            coordinate={{ latitude: client.latitude, longitude: client.longitude }}
                            title={client.name}
                            description={client.address}
                        />
                    )
                })} */}
            </MapView>
            {/* Google input */}
            <BottomSheet/>


        </View>
    )
}

export default maps

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%', 
    }
})