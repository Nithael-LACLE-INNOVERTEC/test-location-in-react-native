import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import GooglePlacesInput from './GooglePlacesInput';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';

const BottomSheetContainer = () => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => [30,'25%', '50%', '90%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <GestureHandlerRootView style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                index={0}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text>Posser vers le haut</Text>
                    <GooglePlacesInput />
                    
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
});

export default BottomSheetContainer;