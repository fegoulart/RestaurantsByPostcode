//
//  RestaurantDetailViewController.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 10/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import UIKit

class RestaurantDetailViewController: UIViewController {

    // MARK: Outlets
    
    @IBOutlet weak var addressCityLabel: UILabel!
    @IBOutlet weak var addressFirstLineLabel: UILabel!
    @IBOutlet weak var openingHourLabel: UILabel!
    @IBOutlet weak var deliveryOpeningHourLabel: UILabel!
    @IBOutlet weak var dealsFixedLabel: UILabel!
    @IBOutlet weak var dealsDynamicLabel: UILabel!
    
    // MARK: Variables
    
    var restaurant: Restaurant?
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setup()
        // Do any additional setup after loading the view.
    }
    
    private func setup() {
        guard let newRestaurant = restaurant else { return }
        
        addressCityLabel.text = newRestaurant.address?.city
        addressFirstLineLabel.text = newRestaurant.address?.firstLine
        openingHourLabel.text = newRestaurant.openingTime?.toPrettyTime()
        deliveryOpeningHourLabel.text = newRestaurant.deliveryOpeningTime?.toPrettyTime()
        if (newRestaurant.deals?.isEmpty ?? true) {
            dealsFixedLabel.isHidden = true
            dealsDynamicLabel.isHidden = true
        } else {
            dealsFixedLabel.isHidden = false
            var deals = ""
            for deal in newRestaurant.deals ?? [] {
                deals = "\(deals) \(deal.description)"
            }
            dealsDynamicLabel.text = deals
        }
    
    }

}
