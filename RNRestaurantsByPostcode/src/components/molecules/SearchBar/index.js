import React from 'react';
import {View, StyleSheet, Keyboard } from 'react-native';
import {SearchButton} from '../../atoms/SearchButton';
import {SearchText} from '../../atoms/SearchText';

export const SearchBar = props => {

    const { postcodeHandler } = props;

    const [enteredPostcode, setEnteredPostcode] = React.useState('')

    const postcodeInputHandler = postcode => {
        setEnteredPostcode(postcode)
    };

    return (
        <View style={styles.searchBar}>
            <SearchText placeholder="postcode" onChangeText={postcodeInputHandler} enteredText={enteredPostcode}/>
            <SearchButton title="Search" hint="Tap search restaurants in entered postcode" onPress={() => {
                Keyboard.dismiss()
                postcodeHandler(enteredPostcode)

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
        borderColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        backgroundColor: 'red'
    }
});