import {AsyncStorage, Text, View} from "react-native";
import {WIDTH} from "../../vars/SIZE";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import STORE_NAME from "../../vars/STORE_NAME";
import {List} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

const QRCode: any = require('react-native-qrcode-svg').default


export default () => {
    const [data, setData] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        AsyncStorage.getItem(STORE_NAME.LIST)
            .then((data) => {
                if (data) {
                    setData(JSON.parse(data))
                }
            })
    }, [])
    if(!data){
        return <View>
            <List.Item title=" Продукты отсутствуют"/>
        </View>
    }
    return <View style={{alignItems:'center'}} >
        {!!data && <QRCode
            size={WIDTH - 50}
            value={data}/>}
    </View>
}