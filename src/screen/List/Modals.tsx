import {StyleSheet, Text, View} from "react-native";
import {Modalize} from "react-native-modalize";
import React, {RefObject} from "react";
import {TovarType} from "../../types/types";
import {Avatar, List, Caption, Headline} from "react-native-paper";
import moment from "moment";

export default ({modalizeRef, item}: { modalizeRef: RefObject<any>, item: TovarType }) => {
    return <Modalize
        adjustToContentHeight
        ref={modalizeRef}>
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                <Avatar.Image size={150} source={{uri: item?.uri}}/>
                <Text style={{fontSize: 20}} >{item?.name}</Text>
            </View>
            <View>
                <List.Section title={'Описание'}>
                    <Caption>{item?.about}</Caption>
                </List.Section>
                <List.Section title={'Производитель'}>
                    <Caption>{item?.made}</Caption>
                </List.Section>
                {item?.create && <List.Section title={'Время упаковки'}>
                    <Caption>{moment(item?.create).format('DD.MM.YY, HH:mm')+ ' ч'}</Caption>
                </List.Section>}
                <List.Section title={'Стоимость'}>
                    <Headline>{item?.price+'$'}</Headline>
                </List.Section>
            </View>
        </View>
    </Modalize>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})