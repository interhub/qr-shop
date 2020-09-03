import {AsyncStorage, Text, View} from "react-native";
import {WIDTH} from "../../vars/SIZE";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import STORE_NAME from "../../vars/STORE_NAME";
import {List} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import storeTool from "../../vars/storeTool";
import {TovarType} from "../../types/types";

const QRCode: any = require('react-native-qrcode-svg').default


export default () => {
    const [data, setData] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        storeTool.getList()
            .then((data:TovarType[])=>{
                setData(JSON.stringify(data))
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