import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {formatTime} from "../../../utils";

export const AdditionalInformation = props => {

    const {address, openingTime, deliveryTime, deals} = props;

    return (
        <View>
            <Text style={styles.titleText}>Address: {address.city}</Text>
            <Text style={styles.titleText}>{address.firstLine}</Text>
            <Text style={styles.titleText}>Opening time: {formatTime(openingTime)}</Text>
            <Text style={styles.titleText}>Delivery time: {formatTime(deliveryTime)}</Text>
            { deals !== " undefined" && deals &&
            <Text style={styles.titleText}>Deals: {deals}</Text>
            }
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