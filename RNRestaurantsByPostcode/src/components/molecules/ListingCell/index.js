import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CellInformation} from "../CellInformation";
import {LogoImage} from '../../atoms/LogoImage';
import Restaurant from '../../../models/Restaurant'

export const ListingCell = props => {
    const {restaurant} = props;
    const emptyRestaurant = new Restaurant('', '', '', '', '', '', '', '', '', '', '');
    const [serverRestaurant, setServerRestaurant] = useState(emptyRestaurant);
    const [serverLogoUrl, setServerLogoUrl] = useState('');

    useEffect(() => {
        setServerRestaurant(restaurant);
        setServerLogoUrl(restaurant.logoUrl);
    });

    // TODO: mantain all logos with same start margin
    // TODO: resolve cuisine long text design issue
    return (

        <View style={styles.cell}>
            <LogoImage style={styles.logo} imageUrl={serverLogoUrl}/>
            <CellInformation style={styles.infos} title={serverRestaurant.name}
                             rating={serverRestaurant.ratingStars}
                             cuisines={serverRestaurant.cuisines}/>
        </View>


    )
};


const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        width: '100%',
        height: 100,
        borderColor: 'gray',
        borderBottomWidth: 1,
        padding: 20,
    },
    logo: {
        alignSelf: 'flex-start',
    },
    infos: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
});

