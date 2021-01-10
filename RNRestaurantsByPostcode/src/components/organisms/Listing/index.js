import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { TouchableRestaurantCell } from "../TouchableRestaurantCell";
import { ListingCell} from "../../molecules/ListingCell";

export const Listing = props => {
    const { restaurants, onCellTap } = props;

    return (

        <FlatList data={restaurants} keyExtractor={restaurant => restaurant.id} renderItem={({item, index, separators}) => (restaurantCell(item, onCellTap))}/>

    )
};

const restaurantCell = (item, onCellTap) => {
    if (item) {
        //return (<ListingCell restaurant={item}/>)
        return (<TouchableRestaurantCell restaurant={item} onCellTap={onCellTap}/>)
        //return (<TouchableHighlight onPress={() => alert('Pressed!')}><ListingCell restaurant={item}/></TouchableHighlight>)
        //return (<TouchableHighlight onPress={()=>onCellTap(item)}><ListingCell restaurant={item}/></TouchableHighlight>)
    } else {
        return <View><Text>Not item</Text></View>
    }
};