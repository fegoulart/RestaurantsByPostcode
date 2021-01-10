//
//  RestaurantsListingViewController.swift
//  RestaurantsByPostcode
//
//  Created by Fernando Luiz Goulart on 07/01/21.
//  Copyright © 2021 Fernando Luiz Goulart. All rights reserved.
//

import UIKit

protocol RestaurantsListingDisplayLogic: AnyObject {
    func displayRestaurantsByPostcode(viewModel: RestaurantsListing.FetchRestaurantsByPostcode.ViewModel)
}

protocol RestaurantCellDelegate: AnyObject {
    func cellTapped(cell: RestaurantsTableViewCell)
}

final class RestaurantsListingViewController: UIViewController, RestaurantsListingDisplayLogic, RestaurantCellDelegate {
  
    

    var interactor: RestaurantsListingBusinessLogic?
    
    // MARK: Outlets
    
    @IBOutlet weak var postCodeTextField: UITextField!
    
    @IBOutlet weak var searchRestaurantsButton: UIButton!
    
    @IBOutlet weak var restaurantsTableView: UITableView!
    
    // MARK: Variables
    
    var displayedRestaurants: [RestaurantsListing.DisplayedRestaurants] = []
    var chosenRestaurant: Restaurant?
    
    // MARK: Object lifecyle
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
        setup()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setup()
    }
    
    // MARK: View lifecyle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }
    @IBAction func SearchButtonAction(_ sender: UIButton) {
        
        guard let postcode: String = postCodeTextField.text else { return }
        
        let request = RestaurantsListing.FetchRestaurantsByPostcode.Request(postcode: postcode)
        
        interactor?.fetchRestaurantsByPostcode(request: request)
    
    }
    
    @IBAction func unwindToRootViewController(segue: UIStoryboardSegue) {
        print("Unwind to Root View Controller")
    }
}

extension RestaurantsListingViewController {
    
    // MARK: Fetch the data to display in the restaurants tableview
    
    func fetchRestaurantsByPostcode(postCode: String) {
        let request = RestaurantsListing.FetchRestaurantsByPostcode.Request(postcode: postCode)
        interactor?.fetchRestaurantsByPostcode(request: request)
    }
    
    func displayRestaurantsByPostcode(viewModel: RestaurantsListing.FetchRestaurantsByPostcode.ViewModel) {
        setUpRestaurantsDisplay(viewModel: viewModel)
    }
    
    private func setUpRestaurantsDisplay(viewModel: RestaurantsListing.FetchRestaurantsByPostcode.ViewModel) {
        displayedRestaurants = viewModel.displayedRestaurants
        restaurantsTableView.reloadData()
    }
    
}

// MARK: - Tableview delegates

extension RestaurantsListingViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return displayedRestaurants.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = restaurantsTableView.dequeueReusableCell(withIdentifier: "RestaurantCell") as? RestaurantsTableViewCell, !displayedRestaurants.isEmpty else {
            return UITableViewCell()
        }
        
        let restaurant = self.displayedRestaurants[indexPath.row]
        cell.update(item: restaurant)
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        chosenRestaurant = self.displayedRestaurants[indexPath.row].restaurant
        performSegue(withIdentifier: "restaurantDetailSegue", sender: self)
    }
 
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destinationVC = segue.destination as! RestaurantDetailViewController
        destinationVC.restaurant = chosenRestaurant
    }
    
    
}

// MARK: Setup

private extension RestaurantsListingViewController {
    
    func setup() {
        let viewController = self
        let interactor = RestaurantsListingInteractor()
        let presenter = RestaurantsListingPresenter()
        viewController.interactor = interactor
        interactor.presenter = presenter
        presenter.viewController = viewController
    }
    
    func setupUI() {
        title = "Restaurants by Postcode"
        setupTableView()
    }
    
    private func setupTableView() {
        restaurantsTableView.delegate = self
        restaurantsTableView.dataSource = self
        restaurantsTableView.register(UINib(nibName: "RestaurantsTableViewCell", bundle: nil), forCellReuseIdentifier: "RestaurantCell")
    }
    
}

// MARK: Restaurante TableView Cell Delegate

extension RestaurantsListingViewController {
    func cellTapped(cell: RestaurantsTableViewCell) {
        
        //performSegue(withIdentifier: "restaurantDetailSegue", sender: self)
        
      }
}



