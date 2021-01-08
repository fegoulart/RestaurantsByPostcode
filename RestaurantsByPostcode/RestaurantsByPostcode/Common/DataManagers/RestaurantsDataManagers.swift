//
//  RestaurantsDataManagers.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import PromiseKit

protocol RestaurantsNetworkInjected {
    
}

struct RestaurantsNetworkInjector {
    static var networkManager: RestaurantsDataManager = RestaurantsNetworkManager()
}

extension RestaurantsNetworkInjected {
    var restaurantsDataManager: RestaurantsDataManager {
        return RestaurantsNetworkInjector.networkManager
    }
}

protocol RestaurantsDataManager: AnyObject {
    func getRestaurantsByPostcode(postcode: String, test: Bool, debugMode: Bool) -> Promise<Restaurants>
}

extension RestaurantsDataManager {
    func getRestaurantsByPostcode(postcode: String, test: Bool = false, debugMode : Bool = false) -> Promise<Restaurants> {
        return getRestaurantsByPostcode(postcode: postcode, test: test, debugMode: debugMode)
    }
}

final class RestaurantsNetworkManager: RestaurantsDataManager {
    
    func getRestaurantsByPostcode(postcode: String, test: Bool, debugMode: Bool) -> Promise<Restaurants> {
        return APIManager.callApi(RestaurantAPI.getRestaurantsByPostcode(postcode: postcode), dataReturnType: Restaurants.self, test:test, debugMode: debugMode)
    }
    
    
}
