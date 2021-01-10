//
//  RestaurantsTableViewCell.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 07/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import UIKit

class RestaurantsTableViewCell: UITableViewCell {

    // MARK: Outlets
    
    @IBOutlet weak var restaurantLogoImageView: UIImageView!
    @IBOutlet weak var restaurantTitleLabel: UILabel!
    @IBOutlet weak var restaurantRatingLabel: UILabel!
    @IBOutlet weak var restaurantCuisineLabel: UILabel!
    @IBOutlet weak var cellContentView: UIView!
    
    // MARK: Variables
    
    var restaurant: Restaurant?
    weak var cellDelegate: RestaurantCellDelegate?
    
    override func awakeFromNib() {
        super.awakeFromNib()
        //let gesture = UITapGestureRecognizer(target: self, action:  #selector(self.onCellTap))
        //self.cellContentView.addGestureRecognizer(gesture)
    }
    
    func update(item: RestaurantsListing.DisplayedRestaurants) {
        self.restaurant = item.restaurant
        restaurantTitleLabel.text = item.restaurant.name
        if let rating = item.restaurant.ratingStars {
            restaurantRatingLabel.text = String(rating)
        }
        var cuisines: String = ""
        for cuisine in item.restaurant.cuisines ?? [] {
            cuisines = "\(cuisines) \(cuisine.name)"
        }
        restaurantCuisineLabel.text = cuisines
        if let logo = item.restaurant.logoUrl {
            if isNotOpen(item: item) {
                restaurantLogoImageView.download(image: logo,isBlackWhite: true)
            } else {
                restaurantLogoImageView.download(image: logo)
            }
        }
        
    }
    
    private func isNotOpen(item: RestaurantsListing.DisplayedRestaurants) -> Bool {
        return !(item.restaurant.isOpenNow ?? false) && !(item.restaurant.isOpenNowForDelivery ?? false)
    }
    
//    @objc private func onCellTap() {
//        self.cellDelegate?.cellTapped(cell: self)
//    }
    
}


