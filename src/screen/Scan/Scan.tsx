import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import ScanTitle from "./ScanTitle";

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
        try {
            console.warn(JSON.parse(data))
        }catch (e) {
            console.warn(e)
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
            }}>
            <View style={styles.titleContainer} >
                <ScanTitle/>
            </View>
            <BarCodeScanner
                onBarCodeScanned={({type, data}) => scanned ? undefined : handleBarCodeScanned({type, data})}
                style={{flex: 1}}
            />
            {/*{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        position:'absolute',
        top: '20%',
        width:'100%',
        height: 30,
        zIndex: 2000
    }
});