import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import {TextInput} from "react-native-web";

export const SearchButton = props => {
    const { onPress, title, hint } = props
    return (
        <TouchableHighlight style={styles.searchButton}  title={props.title} onPress={onPress} accessible={true} accessibilityLabel={props.title} accessibilityHint={props.hint} accessibilityRole="button">
        <Text>{props.title}</Text>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    searchButton: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        width: '30%',
        padding: 20,
        marginTop: 10,
        color: 'blue'
    },
    searchButtonText: {

    }
});