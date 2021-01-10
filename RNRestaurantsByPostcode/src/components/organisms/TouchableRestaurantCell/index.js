import React, {useEffect, useState} from 'react';
import {ListingCell} from "../../molecules/ListingCell";
import { TouchableHighlight} from "react-native";

export const TouchableRestaurantCell = props => {
    const {restaurant, onCellTap} = props;

    return (
        <TouchableHighlight onPress={() => {
            onCellTap(restaurant)
        }}>
            <ListingCell restaurant={restaurant}/>
        </TouchableHighlight>
    )
};

