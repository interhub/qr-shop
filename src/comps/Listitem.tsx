import * as React from 'react';
import {useRef} from 'react';
import {Avatar, List} from 'react-native-paper';
import {TovarType} from "../types/types";
import {Text, View} from 'react-native';

const ListItem = ({item, onOpen}: { item: TovarType, onOpen: (tovar: TovarType)=>void }) => {



    return (
        <View>
            <List.Item
                onPress={()=>onOpen(item)}
                title={item?.name}
                description={item?.about}
                left={props => item.uri ?
                    <Avatar.Image {...props} source={{uri: item?.uri}}/> :
                    <List.Icon {...props} icon="folder"/>}
            />

        </View>

    )
};

export default ListItem;