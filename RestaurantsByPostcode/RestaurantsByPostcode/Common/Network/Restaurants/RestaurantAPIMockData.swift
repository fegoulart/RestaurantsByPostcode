//
//  RestaurantAPIMockData.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import Foundation

extension RestaurantAPI {
    var sampleData: Data {
        switch self {
        case .getRestaurantsByPostcode:
            return stubbedResponse("Restaurants")
        }
    }
}
