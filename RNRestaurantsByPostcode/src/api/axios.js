import axios from 'axios'
import {baseUrl} from '../config/urls.js'

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const setDefaultUrl = baseUrl => {
    axios.defaults.baseURL = baseUrl
}

export default axios;