//
//  Restaurant.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import Foundation

struct Restaurants: Codable {
    let restaurants: [Restaurant]
    
    enum CodingKeys: String, CodingKey {
        case restaurants = "Restaurants"
    }
}

struct Restaurant: Codable {
    let id: Int?
    let name: String?
    let address: Address?
    let ratingStars: Float?
    let logoUrl: String?
    let openingTime: String?
    let deliveryOpeningTime: String?
    let isOpenNow: Bool?
    let isOpenNowForDelivery: Bool?
    let deals: [Deal]?
    let cuisines: [Cuisine]?
    
    enum CodingKeys: String, CodingKey {
        case id = "Id"
        case name = "Name"
        case address = "Address"
        case ratingStars = "RatingStars"
        case logoUrl = "LogoUrl"
        case openingTime = "OpeningTime"
        case deliveryOpeningTime = "DeliveryOpeningTime"
        case isOpenNow = "IsOpenNow"
        case isOpenNowForDelivery = "IsOpenNowForDelivery"
        case deals = "Deals"
        case cuisines = "Cuisines"
    }
}

struct Address: Codable {
    let city: String?
    let firstLine: String?
    let postcode: String?
    
    enum CodingKeys: String, CodingKey {
        case city = "City"
        case firstLine = "FirstLine"
        case postcode = "Postcode"
    }
}


struct Deal: Codable {
    let description: String?
    let discountPercent: Int?
    let qualifyingPrice: Int?
    let offerType: String?
    
    enum CodingKeys: String, CodingKey {
        case description = "Description"
        case discountPercent = "DiscountPercent"
        case qualifyingPrice = "QualifyingPrice"
        case offerType = "OfferType"
    }
}

struct Cuisine: Codable {
    let name: String
    
    enum CodingKeys: String, CodingKey {
        case name = "Name"
    }
    
}
