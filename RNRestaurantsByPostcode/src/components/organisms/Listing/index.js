import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { TouchableRestaurantCell } from "../TouchableRestaurantCell";

export const Listing = props => {
    const { restaurants, onEndListHandler, onCellTap } = props;

    return (

        <FlatList data={restaurants} keyExtractor={restaurant => restaurant.id} renderItem={({item}) => (restaurantCell(item, onCellTap))} onEndReached={() => { onEndListHandler(true);}}/>

    )
};

const restaurantCell = (item, onCellTap) => {
    if (item) {
        return (<TouchableRestaurantCell restaurant={item} onCellTap={onCellTap}/>)
    } else {
        return <View><Text>Not item</Text></View>
    }
};