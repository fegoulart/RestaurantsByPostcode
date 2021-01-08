//
//  UIImageView+Extensions.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import Kingfisher

extension UIImageView {
    func download(image url: String, isBlackWhite: Bool = false) {
        guard let imageURL = URL(string: url) else {
            self.image = UIImage(named: "SquareImage")
            return
        }
        let image = UIImage(named: "SquareImage")
        if isBlackWhite {
            let processor = BlackWhiteProcessor()
            
           self.kf.setImage(with: ImageResource(downloadURL: imageURL),placeholder: image ,options: [.processor(processor)])
            
        } else {
            
            self.kf.setImage(with: ImageResource(downloadURL: imageURL), placeholder: image)
            
        }
    }
    
}
