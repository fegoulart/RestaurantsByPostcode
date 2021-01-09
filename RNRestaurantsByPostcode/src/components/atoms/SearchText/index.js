import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, StyleSheet, ScrollView, TextInput, onChangeText} from 'react-native';

export const SearchText = props => {

    const { onChangeText, placeholder, enteredText } = props

    return (
        <TextInput style={styles.searchText} placeholder={placeholder} maxLength={4} multiline={false} onChangeText={text => onChangeText(text)} value={enteredText}/>
    )
};

const styles = StyleSheet.create({
    searchText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 13,
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        backgroundColor: 'white',
        marginEnd: 18,
        width: '30%',
        borderRadius:10
    }
});