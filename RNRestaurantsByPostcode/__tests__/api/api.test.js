import axios from 'axios'
import { parseRestaurantsData } from '../../src/api'
let mockedJson = require('./ec4m.json');
jest.mock('axios');

describe('fetch Restaurant Data', () => {
    it('parses successfully data from API', () => {
        const data = { mockedJson }
        let result = parseRestaurantsData(data.mockedJson);
        expect(result).toHaveLength(1023);
    })
})

