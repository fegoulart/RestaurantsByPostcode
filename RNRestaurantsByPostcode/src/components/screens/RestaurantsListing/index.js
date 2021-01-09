import React, {useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../../organisms/Header'
import { SearchBar } from '../../molecules/SearchBar'
import {ListingCell} from "../../molecules/ListingCell";

export const RestaurantsListing = () => {

    const [restaurants, setRestaurants] = React.useState([]);

  return (
      <View>
          <Header title="Restaurants by Postcode"/>
          <SearchBar onSearchedHandler={setRestaurants}/>
          <ListingCell title="Germand Doner Kebab - Islington" isOpen="true" isOpenDelivery="true" rating="4.07" imageUrl="http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/67108.gif"/>
          {/*<Listing restaurants={restaurants} />*/}
      </View>
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