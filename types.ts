type State = {
    name: string;
};

type City = {
    name: string;
    state: State
};

type ZipCode = {
    zip_code: string;
    city: City;
}

type Address = {
    address_line_one: string;
    zip_code: ZipCode;
};

type PropertyType = {
    type: string;
};

type ListingStatus = {
    status: string;
}

type Listing = {
    price: number;
    beds: number;
    bathrooms: number;
    sqft: number;
    address: Address;
    property_type: PropertyType;
    listing_status: ListingStatus;
}