import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, StyleSheet, ScrollView} from 'react-native';
import {TextInput} from "react-native-web";
import {SearchButton} from '../../atoms/SearchButton';
import {SearchText} from '../../atoms/SearchText';
import {fetchRestaurantsByPostcode} from "../../../api";
import {set} from "react-native-reanimated";

export const SearchBar = props => {

    const { setRestaurants } = props;
    const [enteredPostcode, setEnteredPostcode] = React.useState('')
    const postcodeInputHandler = enteredPostcode => {
        setEnteredPostcode(enteredPostcode)
    };

    const fetchRestaurants = postcode => {
        fetchRestaurantsByPostcode(postcode).then( restaurants  => {
            setRestaurants(restaurants)
        }, (err) => {
            console.log(`error: ${err}`)
        })
    };

    return (
        <View style={styles.searchBar}>
            <SearchText placeholder="postcode" onChangeText={postcodeInputHandler} enteredText={enteredPostcode}/>
            <SearchButton title="Search" hint="Tap search restaurants in entered postcode" onPress={() => {
                fetchRestaurants(enteredPostcode)
            }}/>
        </View>
        )
};



const styles = StyleSheet.create({
    searchBar: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        width: '100%',
        padding: 20,
        marginTop: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: 'red'
    }
});