import React, {useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';

export const CellInformation = props => {

    const {title, rating, cuisines} = props;

    return (
        <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleText}>Rating: {rating}</Text>
        {/* TODO: resolve layout to wrap / truncate cuisines   */}
        <Text style={styles.titleText}>{cuisines}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 13,
        fontWeight: "bold",
        textAlign: 'center'
    }
});