import React, {useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';

export const Header = props => {
    return (
            <Text style={styles.titleText} >{props.title}</Text>
    )
};

const styles = StyleSheet.create({
    titleText: {
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