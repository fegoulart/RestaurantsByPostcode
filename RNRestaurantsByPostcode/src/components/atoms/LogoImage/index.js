import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from "react-native";


export const LogoImage = props => {

    const {imageUrl, testId} = props;

    return (
        <Image
            testID={testId}
            style={styles.logo}
            source={{
                uri: imageUrl ? imageUrl: null
            }}
        />)
};

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50
    }
});
