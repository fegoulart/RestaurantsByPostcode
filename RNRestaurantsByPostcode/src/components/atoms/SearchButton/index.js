import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {TouchableOpacity} from "react-native-web";

export const SearchButton = props => {
    const { onPress, title, hint, testId, textColor } = props
    return (
        <TouchableHighlight style={styles.searchButton} onPress={onPress} accessible={true} accessibilityLabel={props.title} accessibilityHint={props.hint} accessibilityRole="button" >
        <Text style={{color: textColor ? textColor : 'white'}}  testID={testId}>{props.title}</Text>
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
    }
});