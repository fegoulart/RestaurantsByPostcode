import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Header} from '../../organisms/Header'
import {SearchBar} from '../../molecules/SearchBar'
import {Listing} from "../../organisms/Listing";
import {AdditionalInformation} from "../../molecules/AdditionalInformation";
import Restaurant from "../../../models/Restaurant";
import {fetchRestaurantsByPostcode} from "../../../api";

export const RestaurantsListing = () => {

    const emptyRestaurant = new Restaurant('', '', '', '', '', '', '', '', '', '', '');
    const [restaurants, setRestaurants] = React.useState([]);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [chosenRestaurant, setChosenRestaurant] = useState(emptyRestaurant);
    const [chosenPostcode, setChosenPostcode] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [listingEndReached, setListingEndReached] = useState(false)

    useEffect(() => {
        if (chosenPostcode !== '') {
            try {
                setCurrentPage(0)
                fetchRestaurantsByPostcode(chosenPostcode, currentPage).then(newRestaurants => {
                    setRestaurants(newRestaurants)
                }, (err) => {
                    console.log(`error: ${err}`)
                })
            } catch (err) {
                console.log(`error: ${err}`)
            }
        }
    }, [chosenPostcode]);

    useEffect(() => {
        if (chosenRestaurant.name !== '') {
            setDetailModalVisible(true);
        } else {
            setDetailModalVisible(false)
        }
    }, [chosenRestaurant]);

    useEffect(() => {
        if (listingEndReached) {
            let newCurrentPage = currentPage + 1
            setCurrentPage(newCurrentPage)
            try {
                fetchRestaurantsByPostcode(chosenPostcode, newCurrentPage).then(newRestaurants => {
                    setRestaurants(newRestaurants)
                }, (err) => {
                    console.log(`error: ${err}`)
                })
            } catch (err) {
                console.log(`error: ${err}`)
            }
            setListingEndReached(false)
        }
    }, [listingEndReached]);

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
                        <AdditionalInformation address={chosenRestaurant.address}
                                               openingTime={chosenRestaurant.openingTime}
                                               deliveryTime={chosenRestaurant.deliveryOpeningTime}
                                               deals={chosenRestaurant.deals}/>

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
            <SearchBar postcodeHandler={setChosenPostcode}/>
            <Listing restaurants={restaurants}  onEndListHandler={setListingEndReached} onCellTap={setChosenRestaurant} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%'

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