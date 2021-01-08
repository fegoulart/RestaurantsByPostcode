//
//  RestaurantsTableViewCell.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 07/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import UIKit

class RestaurantsTableViewCell: UITableViewCell {

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    @IBOutlet weak var RestaurantLogoImageView: UIImageView!
    
    @IBOutlet weak var RestaurantTitleLabel: UILabel!
    @IBOutlet weak var RestaurantRatingLabel: UILabel!
    @IBOutlet weak var RestaurantCuisineLabel: UILabel!
    
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
}
