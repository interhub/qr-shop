import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {useNavigation} from "@react-navigation/native";

export default function App() {
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const {status}: { status: string } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}: { type: any, data: any }) => {
        setScanned(true);
        alert(`type ${type} / data ${data}`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            {/*<BarCodeScanner*/}

            {/*    onBarCodeScanned={({type, data}) => scanned ? undefined : handleBarCodeScanned({type, data})}*/}
            {/*    style={StyleSheet.absoluteFillObject}*/}
            {/*/>*/}

            <Button title={'Tap to Scan Again'} onPress={() => {}}/>
        </View>
    );
}