//
//  RestaurantsListingViewControllerTests.swift
//  RestaurantsByPostcodeTests
//
//  Created by Fernando Luiz Goulart on 10/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

@testable import RestaurantsByPostcode
import Quick
import Nimble

class RestaurantListingControllerTests: QuickSpec {
    override func spec() {
    
        describe("RestaurantListingViewController tests") {
            //MARK: Subject under test
            
            var sut: RestaurantsListingViewController!
            var window: UIWindow!
            
            //MARK: Test setup
            
            func setupRestaurantsListingViewController() {
                let storyboard = UIStoryboard(name: "Main", bundle: nil)
                sut = storyboard.instantiateViewController(withIdentifier: "RestaurantsListingViewController") as? RestaurantsListingViewController
            }
            
            beforeEach {
                window = UIWindow(frame: UIScreen.main.bounds)
                setupRestaurantsListingViewController()
            }
            
            afterEach {
                window = nil
            }
            
            afterSuite {
                RestaurantsNetworkInjector.networkManager = RestaurantsNetworkManager()
            }
            
            func loadView() {
                window.addSubview(sut.view)
                sut.beginAppearanceTransition(true, animated: true)
                sut.endAppearanceTransition()
            }
            
            // MARK: Test doubles
            
            class RestaurantsListingBusinessLogicSpy: RestaurantsListingBusinessLogic {
                
                var fetchRestaurantsCalled = false
                
                func fetchRestaurantsByPostcode(request: RestaurantsListing.FetchRestaurantsByPostcode.Request) {
                    fetchRestaurantsCalled = true
                }
                
            }
            
            //MARK: - Test
            
            context("When view is loaded") {
                it("Should be a RestaurantsListingViewController") {
                    expect(sut).to(beAKindOf(RestaurantsListingViewController.self))
                }
                
            }
            
            context("When search button is pressed on the view controller") {
                it("Should fetch Restaurants") {
                    let RestaurantsListingBusinessLogicSpy = RestaurantsListingBusinessLogicSpy()
                    sut.interactor = RestaurantsListingBusinessLogicSpy

                    loadView()

                    sut.fetchRestaurantsByPostcode(postCode: "EC4M")
                    
                    expect(RestaurantsListingBusinessLogicSpy.fetchRestaurantsCalled).to(beTrue())
                }
            }

        }
        
    }
    
}
