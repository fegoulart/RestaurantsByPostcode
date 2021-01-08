//
//  RestaurantsInteractor.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import Foundation
import UIKit

protocol RestaurantsListingBusinessLogic {
    func fetchRestaurantsByPostcode(request: RestaurantsListing.FetchRestaurantsByPostcode.Request)
}

protocol RestaurantsListingDataStore {
    var restaurants: Restaurants? { get }
}

class RestaurantsListingInteractor: RestaurantsListingBusinessLogic, RestaurantsListingDataStore {
    
    var presenter: RestaurantsListingPresentationLogic?
    var worker = RestaurantsListingWorker()
    var restaurants: Restaurants?
    let debugMode = false
    
    func fetchRestaurantsByPostcode(request: RestaurantsListing.FetchRestaurantsByPostcode.Request) {
        
        var response: RestaurantsListing.FetchRestaurantsByPostcode.Response!
        
        worker.restaurantsDataManager.getRestaurantsByPostcode(postcode: request.postcode).done {
            restaurants in
            
            self.restaurants = restaurants
            response = RestaurantsListing.FetchRestaurantsByPostcode.Response(restaurants: restaurants, error: nil)
            
        }.catch { error in
            response = RestaurantsListing.FetchRestaurantsByPostcode.Response(restaurants: nil, error: RestaurantErrors.couldLoadLoadRestaurants(error: error.localizedDescription))
        }.finally {
            self.presenter?.presentRestaurantsByPostcode(response: response)
        }

    }
    
}
