import axios from 'axios'
//import {baseUrl} from '../config/urls.js';

export async function fetchRestaurantsByPostcode(postcode) {
    let data;
    try {
        data = await axios.get(`https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`)
        return data
    } catch (err) {
        console.debug(err.message())
    }
}