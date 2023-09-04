import { Property } from "entities";
import { ListResult } from "types";
import { DBContext } from "./db";

export async function createPropertyFactory(
  listing: ListResult
): Promise<Property> {
  try {
    const propertyRepo = DBContext.getRepository(Property);
    const existingPropterty = await propertyRepo.findOne({
      zpid: listing.zpid,
    });
    if (existingPropterty) return existingPropterty;

    const property: Property = {
      zpid: listing.zpid,
      bathrooms: listing.baths || null,
      beds: listing.beds || null,
      latitude: listing.latLong.latitude || null,
      longitude: listing.latLong.longitude || null,
      sqft: listing.hdpData?.homeInfo.lotAreaValue || null,
      address_line_one: listing.addressStreet,
      address_line_two: listing.hdpData?.homeInfo.unit,
      zip_code: listing.addressZipcode,
      city: listing.addressCity,
      state: listing.addressState,
    };

    property.listing_status = {
      status: listing.hdpData?.homeInfo.homeStatus || "",
    };
    property.property_type = { type: listing.hdpData?.homeInfo.homeType || "" };
  } catch (err: any) {
    throw new Error(err);
  }
}
