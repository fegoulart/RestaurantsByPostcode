//
//  ApiConfig.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 07/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

struct APIConfig {

    static let baseUrl = "https://uk.api.just-eat.io/"
    
    static func getBaseUrl() -> String {
        return "\(baseUrl)restaurants/bypostcode/"
    }
}
