import React, {useState,useEffect} from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Header} from '../../organisms/Header'
import {SearchBar} from '../../molecules/SearchBar'
import {Listing} from "../../organisms/Listing";
import {AdditionalInformation} from "../../molecules/AdditionalInformation";
import Restaurant from "../../../models/Restaurant";

export const RestaurantsListing = () => {

    const emptyRestaurant = new Restaurant('', '', '', '', '', '', '', '', '', '', '');
    const [restaurants, setRestaurants] = React.useState([]);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [chosenRestaurant, setChosenRestaurant] = useState(emptyRestaurant);

    useEffect(()=> {
        if (chosenRestaurant.name !== '') {
            setDetailModalVisible(true);
        } else {
            setDetailModalVisible(false)
        }
    },[chosenRestaurant]);

    return (
        <View style={styles.screen}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={detailModalVisible}
                onRequestClose={() => {

                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <AdditionalInformation address={chosenRestaurant.address} openingTime={chosenRestaurant.openingTime} deliveryTime={chosenRestaurant.deliveryOpeningTime} deals={chosenRestaurant.deals}/>

                        <TouchableHighlight
                            style={{...styles.openButton, backgroundColor: "#2196F3"}}
                            onPress={() => {
                                setChosenRestaurant(emptyRestaurant);
                                setDetailModalVisible(!detailModalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Back</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <Header title="Restaurants by Postcode"/>
            <SearchBar onSearchedHandler={setRestaurants}/>
            <Listing restaurants={restaurants} onCellTap={setChosenRestaurant} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        width: '100%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});