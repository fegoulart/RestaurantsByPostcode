class Restaurant {
    constructor(
        id,
        name,
        address,
        ratingStars,
        cuisines,
        isOpen,
        isOpenForDelivery,
        logoUrl,
        openingTime,
        deliveryOpeningTime,
        deals
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.ratingStars = ratingStars;
        this.cuisines = cuisines;
        this.isOpen = isOpen;
        this.isOpenForDelivery = isOpenForDelivery;
        this.logoUrl = logoUrl;
        this.openingTime = openingTime;
        this.deliveryOpeningTime = deliveryOpeningTime;
        this.deals = deals;
    }
}

export default Restaurant