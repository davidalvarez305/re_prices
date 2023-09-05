import { Entry, ListingStatus, Property, PropertyType } from "./entities";
import { ListResult } from "./types";
import { DBContext } from "./db";

export async function createPropertyTypeFactory(
  type: string
): Promise<PropertyType> {
  try {
    const propertyTypeRepo = DBContext.getRepository(PropertyType);
    const existingPropertyType = await propertyTypeRepo.findOne({
      where: {
        type,
      },
    });

    if (existingPropertyType) return existingPropertyType;

    const newType: Partial<PropertyType> = { type };
    return await propertyTypeRepo.save(newType);
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function listingStatusFactory(
  status: string
): Promise<ListingStatus> {
  try {
    const listingRepo = DBContext.getRepository(ListingStatus);
    const existingStatus = await listingRepo.findOne({
      where: {
        status,
      },
    });

    if (existingStatus) return existingStatus;

    const newStatus: Partial<ListingStatus> = { status };
    return await listingRepo.save(newStatus);
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function createPropertyFactory(
  listing: ListResult
): Promise<Property> {
  try {
    const propertyRepo = DBContext.getRepository(Property);
    const existingPropterty = await propertyRepo.findOne({
      where: {
        zpid: listing.zpid,
      },
    });
    if (existingPropterty) return existingPropterty;

    const property: Partial<Property> = {
      zpid: listing.zpid,
      bathrooms: listing.baths || 0,
      beds: listing.beds || 0,
      latitude: listing.latLong.latitude || 0,
      longitude: listing.latLong.longitude || 0,
      sqft: listing.hdpData?.homeInfo.lotAreaValue || 0,
      address_line_one: listing.addressStreet,
      address_line_two: listing.hdpData?.homeInfo.unit,
      zip_code: listing.addressZipcode,
      city: listing.addressCity,
      state: listing.addressState,
      property_type: await createPropertyTypeFactory(
        listing.hdpData?.homeInfo.homeType || ""
      ),
    };

    return await propertyRepo.save(property);
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function createEntryFactory(
  listing: ListResult,
  property: Property
): Promise<Partial<Entry>> {
  try {
    const entry: Partial<Entry> = {};

    entry.price = listing.unformattedPrice;
    entry.datePriceChanged = listing.hdpData?.homeInfo.datePriceChanged;
    entry.dateCrawled = new Date().getTime();
    entry.listing_status = await listingStatusFactory(
      listing.hdpData?.homeInfo.homeStatus || ""
    );
    entry.price_cut = listing.hdpData?.homeInfo.priceChange;
    entry.property = property;

    return entry;
  } catch (err: any) {
    throw new Error(err);
  }
}
export async function saveEntries(entries: Partial<Entry>[]) {
  try {
    const entryRepo = DBContext.getRepository(Entry);
    await entryRepo.save(entries);
  } catch (err: any) {
    throw new Error(err);
  }
}
