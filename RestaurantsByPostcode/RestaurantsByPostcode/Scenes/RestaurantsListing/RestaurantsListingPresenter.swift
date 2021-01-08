//
//  RestaurantsListingPresenter.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import UIKit

protocol RestaurantsListingPresentationLogic {
    func presentRestaurantsByPostcode(response: RestaurantsListing.FetchRestaurantsByPostcode.Response)
}

final class RestaurantsListingPresenter: RestaurantsListingPresentationLogic {
    
    weak var viewController: RestaurantsListingDisplayLogic?
    
    func presentRestaurantsByPostcode(response: RestaurantsListing.FetchRestaurantsByPostcode.Response) {
        let displayedRestaurants = getDisplayedRestaurants(restaurantsToDisplay: response.restaurants)
        let viewModel = RestaurantsListing.FetchRestaurantsByPostcode.ViewModel(displayedRestaurants: displayedRestaurants )
        viewController?.displayRestaurantsByPostcode(viewModel: viewModel)
    }
    
    
}

extension RestaurantsListingPresenter {
    private func getDisplayedRestaurants(restaurantsToDisplay: Restaurants?) -> [RestaurantsListing.DisplayedRestaurants] {
        
        var displayedRestaurants: [RestaurantsListing.DisplayedRestaurants] = []
        
        if let restaurants = restaurantsToDisplay {
            for restaurant in restaurants.restaurants {
                let newDisplayedRestaurant : RestaurantsListing.DisplayedRestaurants = RestaurantsListing.DisplayedRestaurants(restaurant: restaurant)
                displayedRestaurants.append(newDisplayedRestaurant)
                
            }
        }
        
        return displayedRestaurants
        
    }
    
    
}
