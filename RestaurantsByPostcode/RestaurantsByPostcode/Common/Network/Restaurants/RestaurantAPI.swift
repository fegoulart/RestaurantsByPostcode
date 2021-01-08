//
//  RestaurantAPI.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 08/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import Moya

enum RestaurantAPI {
    case getRestaurantsByPostcode(postcode: String?)
   
}

extension RestaurantAPI: TargetType {

    var headers: [String: String]? {
        return ["Content-type": "application/json"]
    }
    
    var path: String {
        switch self {
        case .getRestaurantsByPostcode(let postcode):
            return "bypostcode/\(postcode ?? "")"
        }
    }
    
    var method: Moya.Method {
        switch self {
        case.getRestaurantsByPostcode:
            return .get
        }
    }
    
    var parameterEncoding: ParameterEncoding {
        switch self {
        case .getRestaurantsByPostcode:
            return URLEncoding.default
        }
    }
    
    var task: Task {
        switch self {
        case .getRestaurantsByPostcode:
            return .requestPlain
        }
    }
    
    
}

