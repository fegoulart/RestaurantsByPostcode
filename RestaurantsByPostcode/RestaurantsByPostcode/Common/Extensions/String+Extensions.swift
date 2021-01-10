//
//  String+Extensions.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 10/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

extension String {
    
    subscript (bounds: CountableClosedRange<Int>) -> String {
        let start = index(startIndex, offsetBy: bounds.lowerBound)
        let end = index(startIndex, offsetBy: bounds.upperBound)
        return String(self[start...end])
    }

    subscript (bounds: CountableRange<Int>) -> String {
        let start = index(startIndex, offsetBy: bounds.lowerBound)
        let end = index(startIndex, offsetBy: bounds.upperBound)
        return String(self[start..<end])
    }
    
    func toPrettyTime() -> String {
        
        let month = self[5..<7]
        let day = self[8..<10]
        let hour = self[11..<16]
        
        return "\(month)/\(day) \(hour)"
    }
    
}
