import axios from './axios'
import Restaurant from "../models/Restaurant";

export async function fetchRestaurantsByPostcode(postcode) {
    let data;
    try {
        data = await axios.get(`https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`)
        return parseRestaurantsData(data.data)
    } catch (err) {
        console.debug(err.message())
        return []
    }
}

export const parseRestaurantsData = data => {
    let restaurants = data.Restaurants

    let newRestaurants = [];
    for (let i = 0; i < restaurants.length; i++) {
        let item = restaurants[i];

        let newRestaurant = new Restaurant(
            item.Id,
            item.Name,
            { city: item.Address.City, firstLine: item.Address.Postcode },
            item.RatingStars.toString(),
            getCuisines(item),
            item.IsOpenNow,
            item.IsOpenNowForDelivery,
            item.LogoUrl,
            item.OpeningTime,
            item.DeliveryOpeningTime,
            getDeals(item)
        );
        newRestaurants.push(newRestaurant);
    }
    return newRestaurants
};

const getCuisines = restaurant => {
    let newCuisines = '';
    for(let j=0; j < restaurant.Cuisines.length; j++) {
        newCuisines = `${newCuisines} ${restaurant.Cuisines[j].Name}`
    }
    return newCuisines;
};

const getDeals = restaurant => {
    let newDeals = '';
    for(let j=0; j < restaurant.Deals.length; j++) {
        newDeals = `${newDeals} ${restaurant.Deals[j].description}`
    }
    return newDeals;
};