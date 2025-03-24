import React, { useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import useCurrentLocation from '@/hooks/useCurrentLocation';


const GooglePlacesInput = () => {
  const { location, setLocation } = useCurrentLocation();
  // ref
  const googleSearchRef = useRef(null);

  return (
    <GooglePlacesAutocomplete
      ref={googleSearchRef}
      placeholder='Search'
      fetchDetails
      onPress={(_data, details = null) => {
        console.log("Info Place: ", _data);
        console.log("Info Place details: ", details);
        console.log("Info Place Geometry: ", details?.geometry);

        const point = details?.geometry.location;
        if (!point) return;
        setLocation({
          ...location,
          latitude: point.lat,
          longitude: point.lng,
        });
      }}
      query={{
        key: 'AIzaSyAXI0zq2hbV_AAy0-XImP0pqD3XFsgGwPQ',
        language: 'en',
      }}
      
      styles={{
        container: {
          flex: 1,
          width: "100%",
          height: 60,
          paddingHorizontal: 2,
          paddingVertical: 8,

        },
        textInputContainer: {
          flexDirection: "row",
          justifyContent: "center",
        },
        textInput: {
          height: 40,
          backgroundColor: '#bbbbbb',
          borderRadius: 8,
          paddingHorizontal: 16,
        },
      }}
    />
  );
};

export default GooglePlacesInput;