import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, StyleSheet, ScrollView} from 'react-native';
import {TextInput} from "react-native-web";
import {SearchButton} from '../../atoms/SearchButton';
import {SearchText} from '../../atoms/SearchText';
import {fetchRestaurantsByPostcode} from "../../../api";
import {set} from "react-native-reanimated";


export const ListingCell = props => {
    const { title, rating, imageUrl, cuisines, isOpen, isOpenForDelivery } = props

    return (
        <View>
            <View styles={{flexDirection: 'row'}}>
                <Ima

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    listingCell: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        width:'100%',
        padding: 20,
        marginTop: 0,
        borderColor: 'gray',
        borderBottomWidth: 1
    }
});