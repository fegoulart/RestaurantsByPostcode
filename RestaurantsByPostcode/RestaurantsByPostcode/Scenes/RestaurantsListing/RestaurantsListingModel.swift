//
//  RestaurantsListingModel.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import Foundation
import UIKit

enum RestaurantsListing {
    
    struct DisplayedRestaurants {
        var restaurant: Restaurant
    }
    
    // MARK: Fetch Restaurants by postcode to display
    
    enum FetchRestaurantsByPostcode {
        struct Request {
            var postcode: String
        }
        
        struct Response {
            var restaurants: Restaurants?
            var error: RestaurantErrors?
        }
        
        struct ViewModel {
            var displayedRestaurants: [DisplayedRestaurants]
            var error: RestaurantErrors?
        }
    }
}
