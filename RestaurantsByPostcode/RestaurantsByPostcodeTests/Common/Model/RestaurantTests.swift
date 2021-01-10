//
//  RestaurantTests.swift
//  RestaurantsByPostcodeTests
//
//  Created by Fernando Luiz Goulart on 10/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

@testable import RestaurantsByPostcode
import Quick
import Nimble

class RestaurantTests: QuickSpec {
    
    override func spec() {
        describe("Restaurant Test") {
            var restaurant: Restaurant!
            var validRestaurant: JSONValue!
            
            beforeEach {
                validRestaurant = Restaurant.validRestaurant
            }
            
            it("should be a valid restaurant") {
                restaurant = try! validRestaurant.decode()
                
                expect(restaurant).to(beAKindOf(Restaurant.self))
            }
        }
    }
}
