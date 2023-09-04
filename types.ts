export interface NextDataObject {
  props: Props;
  page: string;
  query: Query;
  buildId: string;
  assetPrefix: string;
  runtimeConfig: RuntimeConfig;
  isFallback: boolean;
  customServer: boolean;
  gip: boolean;
  appGip: boolean;
  scriptLoader: any[];
}

export interface Props {
  encodedZuid: string;
  guid: string;
  isBot: boolean;
  deviceType: string;
  zuid: string;
  pageProps: PageProps;
}

export interface PageProps {
  searchPageState: SearchPageState;
}

export interface SearchPageState {
  queryState: QueryState;
  filterDefinitions: FilterDefinitions;
  defaultFilterState: DefaultFilterState;
  defaultQueryState: DefaultQueryState;
  searchPageConstants: SearchPageConstants;
  user: User;
  seoFooter: SEOFooter;
  mapState: MapState;
  regionState: RegionState;
  searchPageSeoObject: SearchPageSEOObject;
  abTrials: { [key: string]: string };
  cat1: Cat1;
  categoryTotals: CategoryTotals;
  footerLinksContents: FooterLinksContents;
  autocompleteConfig: AutocompleteConfig;
  analyticsConfig: AnalyticsConfig;
}

export interface AnalyticsConfig {
  dimensions: Dimensions;
  shouldTriggerPageView: boolean;
}

export interface Dimensions {
  dimension66: string;
  dimension3: string;
  dimension4: string;
  dimension5: string;
  dimension6: string;
  dimension146: string;
  dimension25: string;
  dimension12: string;
  dimension158: string;
  dimension90: string;
  dimension91: string;
  dimension92: string;
  dimension70: string;
  dimension18: string;
  dimension71: string;
}

export interface AutocompleteConfig {
  address: Address;
  region: Region;
  regionAddress: Address;
  recentSearchLocalStorageKey: string;
  centroid: Centroid;
  initSearchTerm: string;
  shouldShowSavedHomes: boolean;
  shouldShowSavedSearches: boolean;
  abKey: string;
  clientId: string;
}

export interface Address {
  enabled: boolean;
  url: string;
}

export interface Centroid {
  lat: number | null;
  lon: number | null;
}

export interface Region {
  enabled: boolean;
  url: string;
  truliaUrl: string;
}

export interface Cat1 {
  searchResults: SearchResults;
  searchList: SearchList;
}

export interface SearchList {
  expansionDistance: number;
  zeroResultsFilters: null;
  message: null;
  adsConfig: AdsConfig;
  totalResultCount: number;
  resultsPerPage: number;
  totalPages: number;
  limitSearchResultsCount: null;
  listResultsTitle: string;
  resultContexts: null;
  pageRules: string;
  shareConfig: ShareConfig;
  gdpUrl: string;
  zgGraphUrl: string;
}

export interface AdsConfig {
  navAdSlot: string;
  displayAdSlot: string;
  targets: Targets;
  needsUpdate: boolean;
}

export interface Targets {
  guid: string;
  vers: string;
  premieragent: string;
  state: string;
  dma: string;
  cnty: string;
  city: string;
  zip: string;
  agentnavads: string;
  mlat: string;
  mlong: string;
  prange: string;
  proptp: string;
  listtp: string;
  searchtp: string;
}

export interface ShareConfig {
  csrfToken: string;
  captchaKey: string;
}

export interface SearchResults {
  listResults: ListResult[];
  resultsHash: string;
  homeRecCount: number;
  showForYouCount: number;
  relaxedResults: RelaxedResult[];
  relaxedResultsHash: string;
}

export interface ListResult {
  zpid: string;
  id: string;
  lotId?: number;
  imgSrc: string;
  hasImage: boolean;
  carouselPhotos: CarouselPhoto[];
  statusType: StatusType;
  statusText: string;
  detailUrl: string;
  latLong: LatLong;
  units?: Unit[];
  variableData: VariableData;
  badgeInfo: null;
  buildingName?: null;
  isBuilding?: boolean;
  address: string;
  addressStreet: string;
  addressState: string;
  addressCity: string;
  addressZipcode: string;
  providerListingId: string;
  availabilityCount?: number;
  canSaveBuilding?: boolean;
  has3DModel: boolean;
  isFeaturedListing: boolean;
  isShowcaseListing: boolean;
  isSaved: boolean;
  list: boolean;
  relaxed: boolean;
  countryCurrency?: string;
  price?: string;
  unformattedPrice?: number;
  isUndisclosedAddress?: boolean;
  beds?: number;
  baths?: number;
  area?: number | null;
  isZillowOwned?: boolean;
  hdpData?: HdpData;
  isUserClaimingOwner?: boolean;
  isUserConfirmedClaim?: boolean;
  pgapt?: string;
  sgapt?: string;
  zestimate?: number;
  shouldShowZestimateAsPrice?: boolean;
  hasVideo?: boolean;
  isHomeRec?: boolean;
  hasAdditionalAttributions?: boolean;
  availabilityDate?: Date | null;
}

export interface CarouselPhoto {
  url: string;
}

export interface HdpData {
  homeInfo: HomeInfo;
}

export interface HomeInfo {
  zpid: number;
  streetAddress: string;
  zipcode: string;
  city: string;
  state: string;
  latitude?: number;
  longitude?: number;
  price: number;
  bathrooms: number;
  bedrooms: number;
  livingArea?: number;
  homeType: HomeType;
  homeStatus: StatusType;
  daysOnZillow: number;
  isFeatured: boolean;
  shouldHighlight: boolean;
  isRentalWithBasePrice: boolean;
  zestimate: number;
  rentZestimate: number;
  listing_sub_type: DebugRequest;
  isUnmappable: boolean;
  isPreforeclosureAuction: boolean;
  homeStatusForHDP: StatusType;
  priceForHDP: number;
  isNonOwnerOccupied: boolean;
  isPremierBuilder: boolean;
  isZillowOwned: boolean;
  currency: Currency;
  country: Country;
  taxAssessedValue?: number;
  unit?: string;
  isShowcaseListing: boolean;
  datePriceChanged?: number;
  priceReduction?: string;
  priceChange?: number;
  lotAreaUnit?: string;
  lotAreaValue?: number;
}

export enum Country {
  Usa = "USA",
}

export enum Currency {
  Usd = "USD",
}

export enum StatusType {
  ForRent = "FOR_RENT",
}

export enum HomeType {
  Townhouse = "TOWNHOUSE",
}

export interface DebugRequest {}

export interface LatLong {
  latitude?: number;
  longitude?: number;
}

export interface Unit {
  price: string;
  beds: string;
}

export interface VariableData {
  type: VariableDataType;
  text: string;
  data?: Data;
}

export interface Data {
  isFresh: boolean;
}

export enum VariableDataType {
  TimeOnInfo = "TIME_ON_INFO",
}

export interface RelaxedResult {
  zpid: string;
  id: string;
  providerListingId: string;
  imgSrc: string;
  hasImage: boolean;
  carouselPhotos: CarouselPhoto[];
  detailUrl: string;
  statusType: StatusType;
  statusText: string;
  countryCurrency: string;
  price: string;
  unformattedPrice: number;
  address: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZipcode: string;
  isUndisclosedAddress: boolean;
  beds: number;
  baths: number;
  area: number;
  latLong: LatLong;
  isZillowOwned: boolean;
  variableData: VariableData;
  badgeInfo: BadgeInfo | null;
  hdpData: HdpData;
  isSaved: boolean;
  isUserClaimingOwner: boolean;
  isUserConfirmedClaim: boolean;
  pgapt: string;
  sgapt: string;
  zestimate: number;
  shouldShowZestimateAsPrice: boolean;
  has3DModel: boolean;
  hasVideo: boolean;
  isHomeRec: boolean;
  hasAdditionalAttributions: boolean;
  isFeaturedListing: boolean;
  isShowcaseListing: boolean;
  availabilityDate: Date | null;
  relaxed: boolean;
  ma: boolean;
}

export interface BadgeInfo {
  type: string;
  text: string;
}

export interface CategoryTotals {
  cat1: Cat;
  cat2: Cat;
}

export interface Cat {
  totalResultCount: number;
}

export interface DefaultFilterState {
  keywords: CommuteMaxTimeClass;
  isPublicSchool: CommuteMaxTimeClass;
  isCityView: CommuteMaxTimeClass;
  isWaterfront: CommuteMaxTimeClass;
  isCondo: CommuteMaxTimeClass;
  onlyRentalExcludeNullAvailabilityDates: CommuteMaxTimeClass;
  commuteDestination: CommuteMaxTimeClass;
  isMountainView: CommuteMaxTimeClass;
  singleStory: CommuteMaxTimeClass;
  onlyRentalParkingAvailable: CommuteMaxTimeClass;
  monthlyPayment: BedsClass;
  price: BedsClass;
  onlyPriceReduction: CommuteMaxTimeClass;
  onlyRentalAcceptsApplications: CommuteMaxTimeClass;
  SEOTypedIdField: SEOTypedIDField;
  sqft: BedsClass;
  isZillowOwnedOnly: CommuteMaxTimeClass;
  isForRent: CommuteMaxTimeClass;
  onlyRentalRequestedAvailabilityDate: CommuteMaxTimeClass;
  isForSaleByOwner: CommuteMaxTimeClass;
  hasAirConditioning: CommuteMaxTimeClass;
  isApartment: CommuteMaxTimeClass;
  sortSelection: CommuteMaxTimeClass;
  isMiddleSchool: CommuteMaxTimeClass;
  isWaterView: CommuteMaxTimeClass;
  isPrivateSchool: CommuteMaxTimeClass;
  monthlyCostPayment: BedsClass;
  onlyRentalIncomeRestricted: CommuteMaxTimeClass;
  isManufactured: CommuteMaxTimeClass;
  onlyRentalInUnitLaundry: CommuteMaxTimeClass;
  isComingSoon: CommuteMaxTimeClass;
  isSingleFamily: CommuteMaxTimeClass;
  isForSaleForeclosure: CommuteMaxTimeClass;
  commuteTimeOfDay: CommuteMaxTimeClass;
  isHighSchool: CommuteMaxTimeClass;
  onlyWithPhotos: CommuteMaxTimeClass;
  hoa: BedsClass;
  beds: BedsClass;
  isAllHomes: CommuteMaxTimeClass;
  ageRestricted55Plus: CommuteMaxTimeClass;
  onlyRentalCatsAllowed: CommuteMaxTimeClass;
  includeSchoolsSelection: IncludeSchoolsSelection;
  isCharterSchool: CommuteMaxTimeClass;
  onlyRentalPetsAllowed: CommuteMaxTimeClass;
  isAuction: CommuteMaxTimeClass;
  is3dHome: CommuteMaxTimeClass;
  isMultiFamily: CommuteMaxTimeClass;
  doz: CommuteMaxTimeClass;
  isNewConstruction: CommuteMaxTimeClass;
  isTownhouse: CommuteMaxTimeClass;
  isLotLand: CommuteMaxTimeClass;
  isBasementUnfinished: CommuteMaxTimeClass;
  isOpenHousesOnly: CommuteMaxTimeClass;
  isBasementFinished: CommuteMaxTimeClass;
  dataSourceSelection: CommuteMaxTimeClass;
  isPreMarketForeclosure: CommuteMaxTimeClass;
  isForSaleByAgent: CommuteMaxTimeClass;
  parkingSpots: GreatSchoolsRating;
  isPreMarketPreForeclosure: CommuteMaxTimeClass;
  commuteMaxTime: CommuteMaxTimeClass;
  hasGarage: CommuteMaxTimeClass;
  hasPool: CommuteMaxTimeClass;
  onlyRentalSmallDogsAllowed: CommuteMaxTimeClass;
  isAcceptingBackupOffersSelected: CommuteMaxTimeClass;
  built: BedsClass;
  onlyRentalLargeDogsAllowed: CommuteMaxTimeClass;
  monthlyCostDownPayment: CommuteMaxTimeClass;
  lotSize: LotSize;
  greatSchoolsRating: GreatSchoolsRating;
  includeUnratedSchools: CommuteMaxTimeClass;
  isRecentlySold: CommuteMaxTimeClass;
  isPendingListingsSelected: CommuteMaxTimeClass;
  onlyRentalHousingConnector: CommuteMaxTimeClass;
  onlyRentalFeaturedMultiFamilyBuilding: CommuteMaxTimeClass;
  baths: BedsClass;
  isApartmentOrCondo: CommuteMaxTimeClass;
  includeHomesWithNoHoaData: CommuteMaxTimeClass;
  isElementarySchool: CommuteMaxTimeClass;
  isParkView: CommuteMaxTimeClass;
  commuteMode: CommuteMaxTimeClass;
  enableSchools: CommuteMaxTimeClass;
}

export interface SEOTypedIDField {
  value: null;
  field: null;
  id: null;
}

export interface CommuteMaxTimeClass {
  value: boolean | null | string;
}

export interface BedsClass {
  min: number | null;
  max: number | null;
}

export interface GreatSchoolsRating {
  min: number | null;
}

export interface IncludeSchoolsSelection {
  highSchool: null | string;
  middleSchool: null | string;
  elementarySchool: null | string;
}

export interface LotSize {
  min: null;
  max: null;
  units: Units;
}

export enum Units {
  Sqft = "sqft",
}

export interface DefaultQueryState {
  filterState: DebugRequest;
  dataSource: string;
  isMapVisible: boolean;
  isListVisible: boolean;
  mapBounds: Bounds;
  mapZoom: number;
  pagination: Pagination;
  usersSearchTerm: null;
  regionSelection: null;
  schoolId: null;
  districtId: null;
  customRegionId: null;
  savedSearchEnrollmentId: null;
  nearMe: null;
  category: string;
  debugRequest: DebugRequest;
  commuteLat: null;
  commuteLng: null;
  listPriceActive: boolean;
}

export interface Bounds {
  west: number;
  south: number;
  east: number;
  north: number;
  zoom?: number;
}

export interface Pagination {
  currentPage: number;
}

export interface FilterDefinitions {
  keywords: Keywords;
  isPublicSchool: EnableSchools;
  isCityView: EnableSchools;
  isWaterfront: EnableSchools;
  isCondo: EnableSchools;
  onlyRentalExcludeNullAvailabilityDates: OnlyRental;
  commuteDestination: FilterDefinitionsAgeRestricted55Plus;
  isMountainView: EnableSchools;
  singleStory: SingleStory;
  onlyRentalParkingAvailable: EnableSchools;
  monthlyPayment: MonthlyPayment;
  price: Price;
  onlyPriceReduction: EnableSchools;
  onlyRentalAcceptsApplications: EnableSchools;
  SEOTypedIdField: FilterDefinitionsSEOTypedIDField;
  sqft: Sqft;
  isZillowOwnedOnly: HasAirConditioning;
  isForRent: EnableSchools;
  onlyRentalRequestedAvailabilityDate: OnlyRental;
  isForSaleByOwner: EnableSchools;
  hasAirConditioning: HasAirConditioning;
  isApartment: EnableSchools;
  sortSelection: SortSelection;
  isMiddleSchool: EnableSchools;
  isWaterView: EnableSchools;
  isPrivateSchool: EnableSchools;
  monthlyCostPayment: MonthlyPayment;
  onlyRentalIncomeRestricted: EnableSchools;
  isManufactured: EnableSchools;
  onlyRentalInUnitLaundry: EnableSchools;
  isComingSoon: EnableSchools;
  isSingleFamily: EnableSchools;
  isForSaleForeclosure: EnableSchools;
  commuteTimeOfDay: FilterDefinitionsAgeRestricted55Plus;
  isHighSchool: EnableSchools;
  onlyWithPhotos: EnableSchools;
  hoa: Hoa;
  beds: Beds;
  isAllHomes: EnableSchools;
  ageRestricted55Plus: FilterDefinitionsAgeRestricted55Plus;
  onlyRentalCatsAllowed: EnableSchools;
  includeSchoolsSelection: FilterDefinitionsIncludeSchoolsSelection;
  isCharterSchool: EnableSchools;
  onlyRentalPetsAllowed: EnableSchools;
  isAuction: EnableSchools;
  is3dHome: HasAirConditioning;
  isMultiFamily: EnableSchools;
  doz: Doz;
  isNewConstruction: EnableSchools;
  isTownhouse: EnableSchools;
  isLotLand: EnableSchools;
  isBasementUnfinished: EnableSchools;
  isOpenHousesOnly: HasAirConditioning;
  isBasementFinished: EnableSchools;
  dataSourceSelection: FilterDefinitionsAgeRestricted55Plus;
  isPreMarketForeclosure: EnableSchools;
  isForSaleByAgent: EnableSchools;
  parkingSpots: ParkingSpots;
  isPreMarketPreForeclosure: EnableSchools;
  commuteMaxTime: CommuteMaxTime;
  hasGarage: HasAirConditioning;
  hasPool: HasAirConditioning;
  onlyRentalSmallDogsAllowed: EnableSchools;
  isAcceptingBackupOffersSelected: EnableSchools;
  built: Built;
  onlyRentalLargeDogsAllowed: EnableSchools;
  monthlyCostDownPayment: CommuteMaxTime;
  lotSize: FilterDefinitionsLotSize;
  greatSchoolsRating: FilterDefinitionsGreatSchoolsRating;
  includeUnratedSchools: EnableSchools;
  isRecentlySold: IsRecentlySold;
  isPendingListingsSelected: EnableSchools;
  onlyRentalHousingConnector: HasAirConditioning;
  onlyRentalFeaturedMultiFamilyBuilding: EnableSchools;
  baths: FilterDefinitionsBaths;
  isApartmentOrCondo: EnableSchools;
  includeHomesWithNoHoaData: HasAirConditioning;
  isElementarySchool: EnableSchools;
  isParkView: EnableSchools;
  commuteMode: FilterDefinitionsAgeRestricted55Plus;
  enableSchools: EnableSchools;
}

export interface FilterDefinitionsSEOTypedIDField {
  id: string;
  shortId: string;
  labels: SEOTypedIDFieldLabels;
  defaultValue: SEOTypedIDField;
}

export interface SEOTypedIDFieldLabels {
  default: string;
}

export interface FilterDefinitionsAgeRestricted55Plus {
  id: string;
  shortId: string;
  labels: SEOTypedIDFieldLabels;
  type: string;
  defaultValue: CommuteMaxTimeClass;
  allowedValues?: AllowedValues;
}

export interface AllowedValues {
  i?: string;
  e?: string;
  o?: string;
  Drive?: string;
  Transit?: string;
  Walk?: string;
  Bike?: string;
  Now?: string;
  "Rush hour"?: string;
  "Off-peak"?: string;
}

export interface FilterDefinitionsBaths {
  id: string;
  labels: BathsLabels;
  sortOrder: number;
  type: string;
  defaultValue: BedsClass;
  suggestedEnums: BathsSuggestedEnums;
  exposedPillEnabled: boolean;
}

export interface BathsLabels {
  default: string;
  valueFormatter: PurpleValueFormatter;
}

export interface PurpleValueFormatter {
  none: string;
  min: string;
  max: string;
  minMax: string;
  identicalMinMax: string;
}

export interface BathsSuggestedEnums {
  Any: number | null;
  "1+": number;
  "1.5+"?: number;
  "2+": number;
  "3+": number;
  "4+": number;
}

export interface Beds {
  id: string;
  labels: BedsLabels;
  sortOrder: number;
  type: string;
  subType: string;
  defaultValue: BedsClass;
  suggestedEnums: BedsSuggestedEnums;
  exposedPillEnabled: boolean;
}

export interface BedsLabels {
  default: string;
  valueFormatter: FluffyValueFormatter;
}

export interface FluffyValueFormatter {
  none: string;
  min: string;
  max: string;
  minMax: string;
  identicalMinMax: IdenticalMinMax;
}

export interface IdenticalMinMax {
  "0": string;
  default: string;
}

export interface BedsSuggestedEnums {
  default: Default[];
  exact: Default[];
}

export interface Default {
  key: string;
  value: number;
}

export interface Built {
  id: string;
  labels: BuiltLabels;
  sortOrder: number;
  type: string;
  defaultValue: BedsClass;
  exposedPillEnabled: boolean;
}

export interface BuiltLabels {
  default: string;
  minimum: string;
  maximum: string;
  valueFormatter: TentacledValueFormatter;
  short?: string;
}

export interface TentacledValueFormatter {
  none: string;
  min: string;
  max: string;
  minMax: string;
  identicalMinMax: string;
  numberFormatter: string;
  inputFormatter: string;
}

export interface CommuteMaxTime {
  id: string;
  shortId: string;
  labels: SEOTypedIDFieldLabels;
  type: string;
  defaultValue: CommuteMaxTimeClass;
  allowedValues: { [key: string]: number | null };
}

export interface Doz {
  id: string;
  labels: DozLabels;
  sortOrder: number;
  type: string;
  defaultValue: CommuteMaxTimeClass;
  allowedValues: { [key: string]: number | null };
  suggestedEnums: DozSuggestedEnums;
  exposedPillEnabled: boolean;
}

export interface DozLabels {
  default: string;
  soldInLast: string;
  both: string;
  valueFormatter: StickyValueFormatter;
}

export interface StickyValueFormatter {
  "1": string;
  "7": string;
  "14": string;
  "30": string;
  "90": string;
  any: string;
  "6m": string;
  "12m": string;
  "24m": string;
  "36m": string;
}

export interface DozSuggestedEnums {
  Any: string;
  "1 day": string;
  "7 days": string;
  "14 days": string;
  "30 days": string;
  "90 days": string;
  "6 months": string;
  "12 months": string;
  "24 months": string;
  "36 months": string;
}

export interface EnableSchools {
  id: string;
  shortId?: string;
  labels: SEOTypedIDFieldLabels;
  type: EnableSchoolsType;
  defaultValue: CommuteMaxTimeClass;
}

export enum EnableSchoolsType {
  Boolean = "Boolean",
}

export interface FilterDefinitionsGreatSchoolsRating {
  id: string;
  shortId: string;
  labels: GreatSchoolsRatingLabels;
  type: string;
  defaultValue: GreatSchoolsRating;
  suggestedEnums: GreatSchoolsRatingSuggestedEnum[];
}

export interface GreatSchoolsRatingLabels {
  default: string;
  valueFormatter: IndigoValueFormatter;
}

export interface IndigoValueFormatter {
  none: string;
}

export interface GreatSchoolsRatingSuggestedEnum {
  label: string;
  value: number;
}

export interface HasAirConditioning {
  id: string;
  shortId: string;
  labels: HasAirConditioningLabels;
  type: EnableSchoolsType;
  defaultValue: CommuteMaxTimeClass;
  ABTest?: HasAirConditioningABTest;
}

export interface HasAirConditioningABTest {
  RMX_3RD_PARTY_P1: string;
}

export interface HasAirConditioningLabels {
  default: string;
  tracking: string;
}

export interface Hoa {
  id: string;
  labels: HoaLabels;
  sortOrder: number;
  type: string;
  defaultValue: BedsClass;
  suggestedEnums: { [key: string]: number | null };
  exposedPillEnabled: boolean;
}

export interface HoaLabels {
  default: string;
  valueFormatter: IndecentValueFormatter;
}

export interface IndecentValueFormatter {
  none: string;
  max: string;
}

export interface FilterDefinitionsIncludeSchoolsSelection {
  id: string;
  labels: IncludeSchoolsSelectionLabels;
  type: string;
  defaultValue: IncludeSchoolsSelection;
}

export interface IncludeSchoolsSelectionLabels {
  default: string;
  valueFormatter: IncludeSchoolsSelection;
}

export interface IsRecentlySold {
  id: string;
  shortId: string;
  labels: IsRecentlySoldLabels;
  type: EnableSchoolsType;
  defaultValue: CommuteMaxTimeClass;
}

export interface IsRecentlySoldLabels {
  default: string;
  long: string;
}

export interface Keywords {
  id: string;
  shortId: string;
  labels: HasAirConditioningLabels;
  sortOrder: number;
  type: string;
  defaultValue: CommuteMaxTimeClass;
  exposedPillEnabled: boolean;
}

export interface FilterDefinitionsLotSize {
  id: string;
  shortId: string;
  labels: LotSizeLabels;
  sortOrder: number;
  type: string;
  subType: string;
  defaultValue: LotSize;
  unitTypes: string[];
  suggestedEnums: LotSizeSuggestedEnum[];
  exposedPillEnabled: boolean;
}

export interface LotSizeLabels {
  default: string;
  minimum: string;
  maximum: string;
  shortDescription: string;
  longDescription: string;
  pluralSubstitutes: PluralSubstitutes;
  valueFormatter: TentacledValueFormatter;
}

export interface PluralSubstitutes {
  acre: string;
}

export interface LotSizeSuggestedEnum {
  label: string;
  value: number;
  units: Units;
}

export interface MonthlyPayment {
  id: string;
  shortId: string;
  labels: MonthlyCostPaymentLabels;
  type: string;
  defaultValue: BedsClass;
  suggestedEnums: GreatSchoolsRatingSuggestedEnum[];
  sortOrder?: number;
  exposedPillEnabled?: boolean;
}

export interface MonthlyCostPaymentLabels {
  default: string;
  valueFormatter: TentacledValueFormatter;
}

export interface OnlyRental {
  id: string;
  shortId: string;
  labels: SEOTypedIDFieldLabels;
  type: string;
  defaultValue: CommuteMaxTimeClass;
  exposedPillEnabled: boolean;
  ABTest: OnlyRentalExcludeNullAvailabilityDatesABTest;
}

export interface OnlyRentalExcludeNullAvailabilityDatesABTest {
  RE_Move_In_Date_Filter: string;
}

export interface ParkingSpots {
  id: string;
  shortId: string;
  type: string;
  labels: SEOTypedIDFieldLabels;
  defaultValue: GreatSchoolsRating;
  suggestedEnums: BathsSuggestedEnums;
}

export interface Price {
  id: string;
  labels: PriceLabels;
  sortOrder: number;
  type: string;
  defaultValue: BedsClass;
  suggestedEnums: GreatSchoolsRatingSuggestedEnum[];
  exposedPillEnabled: boolean;
}

export interface PriceLabels {
  default: string;
  long: string;
  valueFormatter: TentacledValueFormatter;
}

export interface SingleStory {
  id: string;
  shortId: string;
  labels: SingleStoryLabels;
  sortOrder: number;
  type: EnableSchoolsType;
  defaultValue: CommuteMaxTimeClass;
  exposedPillEnabled: boolean;
}

export interface SingleStoryLabels {
  default: string;
  tracking: string;
  valueFormatter: HilariousValueFormatter;
}

export interface HilariousValueFormatter {
  true: string;
}

export interface SortSelection {
  id: string;
  shortId: string;
  labels: SortSelectionLabels;
  type: string;
  defaultValue: CommuteMaxTimeClass;
  allowedValues: ValueFormatterClass;
  ABTest: SortSelectionABTest;
}

export interface SortSelectionABTest {
  RE_JanusBrainSort: string;
}

export interface ValueFormatterClass {
  saved: string;
  listingstatus: string;
  mostrecentchange: string;
  globalrelevanceex: string;
  featured: string;
  priced: string;
  pricea: string;
  paymentd: string;
  paymenta: string;
  days: string;
  beds: string;
  baths: string;
  size: string;
  lot: string;
  zest: string;
  zesta: string;
  priorityscore: string;
}

export interface SortSelectionLabels {
  default: string;
  valueFormatter: ValueFormatterClass;
}

export interface Sqft {
  id: Units;
  labels: BuiltLabels;
  sortOrder: number;
  type: string;
  defaultValue: BedsClass;
  suggestedEnums: GreatSchoolsRatingSuggestedEnum[];
  exposedPillEnabled: boolean;
}

export interface FooterLinksContents {
  region_info: RegionInfo;
  canonical_url: string;
  contents: Content[];
  base_url: string;
}

export interface Content {
  template: string;
  title: string;
  icon: null | string;
  expanded: boolean | null;
  rows: Array<RowClass[] | Breadcrumb>;
}

export interface RowClass {
  template?: Template;
  title?: string;
  icon?: string;
  expanded?: boolean;
  rows?: Array<Breadcrumb[]>;
  text?: string;
  path?: string;
}

export interface Breadcrumb {
  text: string;
  path?: string;
}

export enum Template {
  SingleSection = "SINGLE_SECTION",
}

export interface RegionInfo {
  region_id: number;
  region_type: number;
  region_name: string;
  region_name_for_display: string;
}

export interface MapState {
  customRegionPolygonWkt: null;
  schoolPolygonWkt: null;
  isCurrentLocationSearch: boolean;
  userPosition: Centroid;
}

export interface QueryState {
  usersSearchTerm: string;
  mapBounds: Bounds;
  regionSelection: RegionSelection[];
  isMapVisible: boolean;
  filterState: FilterState;
}

export interface FilterState {
  price: BedsClass;
  monthlyPayment: BedsClass;
  isForSaleByAgent: CommuteMaxTimeClass;
  isForSaleByOwner: CommuteMaxTimeClass;
  isNewConstruction: CommuteMaxTimeClass;
  isForSaleForeclosure: CommuteMaxTimeClass;
  isComingSoon: CommuteMaxTimeClass;
  isAuction: CommuteMaxTimeClass;
  isForRent: CommuteMaxTimeClass;
  isAllHomes: CommuteMaxTimeClass;
  isSingleFamily: CommuteMaxTimeClass;
  isCondo: CommuteMaxTimeClass;
  isMultiFamily: CommuteMaxTimeClass;
  isManufactured: CommuteMaxTimeClass;
  isLotLand: CommuteMaxTimeClass;
  isApartment: CommuteMaxTimeClass;
  isApartmentOrCondo: CommuteMaxTimeClass;
}

export interface RegionSelection {
  regionId: number;
  regionType: number;
}

export interface RegionState {
  regionInfo: RegionInfoElement[];
  regionBounds: Bounds;
}

export interface RegionInfoElement {
  regionType: number;
  regionId: number;
  regionName: string;
  displayName: string;
  isPointRegion: boolean;
}

export interface SearchPageConstants {
  monthlyInterestRate: number;
  isMobile: boolean;
  isTablet: boolean;
  searchMapGoogleAPIKey: string;
  mapComboUrl: string;
  debugEnabled: boolean;
  keystoneTargetUrl: string;
  categoryOneTitle: string;
  categoryTwoTitle: string;
  gtm: Gtm;
}

export interface Gtm {
  gtmInitialData: GtmInitialDatum[];
  gtmContainerID: string;
  isGtmEnabled: boolean;
}

export interface GtmInitialDatum {
  isTablet?: boolean;
  isPhone?: boolean;
  isMobile?: boolean;
  isMobileApp?: boolean;
  event?: string;
  gaCustomDimensions?: GaCustomDimensions;
}

export interface GaCustomDimensions {
  dimension3: string;
  dimension4: string;
  dimension5: string;
  dimension6: string;
  dimension18: string;
  dimension23: string;
  dimension66: string;
}

export interface SearchPageSEOObject {
  baseUrl: string;
  windowTitle: string;
  metaDescription: string;
  robotsTagContent: string;
}

export interface SEOFooter {
  regionName: string;
  rentalBuildingSearch: boolean;
  condoBuildingsSearch: boolean;
  rentalApartmentSearch: boolean;
  studioApartmentsSearch: boolean;
  furnishedApartmentsSearch: boolean;
  cheapApartmentsSearch: boolean;
  schoolLayerEnabled: boolean;
  showSimilarApartmentsSection: boolean;
  isApartmentRental: boolean;
  baseUrl: string;
  breadcrumbsCategory: string;
  breadcrumbs: Breadcrumb[];
  regionNamePlusStateAbbv: string;
  rentalPage: boolean;
  rentalPageDetails: RentalPageDetails;
  snippetTableDetails: SnippetTableDetails;
  nearbyRegionDetails: NearbyRegionDetails;
  rentalsFooter: RentalsFooter[];
}

export interface NearbyRegionDetails {
  hasRegionDetailsData: boolean;
  regionName: string;
  isRentalApartmentOrHouses: boolean;
  isCanadian: boolean;
  currentRegion: CurrentRegion;
  isValidZhvi: boolean;
  showFooterMoreLinks: boolean;
  linksByRegionType: LinksByRegionType;
  showAttributeLinks: null;
}

export interface CurrentRegion {
  regionType: string;
  normalizedName: string;
  id: number;
  regionZindex: string;
  population: string;
}

export interface LinksByRegionType {
  boroughs: any[];
  cities: City[];
  neighborhoods: City[];
  zipcodes: City[];
  universities: any[];
}

export interface City {
  currentLink: string;
  regionId: number;
  displayRegionName: string;
  regionZindex?: string;
  population: string;
}

export interface RentalPageDetails {
  regionName: string;
  regionTypeIsValid: boolean;
  petFriendlyURL: string;
  rentAffordabilityCalculatorURL: string;
  rentalPage: boolean;
  rentalsAppURL: string;
  forSaleURL: string;
  luxuryApartmentsURL: string;
  rentalCheapApartmentsURL: string;
  rentalFurnishedApartmentsURL: string;
  rentalStudioApartmentsURL: string;
  waterfrontURL: string;
}

export interface RentalsFooter {
  header: string;
  seoFooterColumnElement: SEOFooterColumnElement[];
}

export interface SEOFooterColumnElement {
  url: string;
  value: string;
  title: null | string;
}

export interface SnippetTableDetails {
  targetedRegionName: string;
  regionForSaleCount: number;
  regionForRentCount: number;
  population: string;
}

export interface User {
  isLoggedIn: boolean;
  email: string;
  displayName: string;
  hasHousingConnectorPermission: boolean;
  savedHomesCount: number;
  personalizedSearchTraceID: string;
  guid: string;
  zuid: string;
  isBot: boolean;
  userSpecializedSEORegion: boolean;
}

export interface Query {
  guid: string;
  isTablet: string;
  isMobile: string;
  fullPage: string;
}

export interface RuntimeConfig {
  NODE_ENV: string;
  ENV: string;
  PLATFORM_INTERNAL_URL: string;
  NEXT_PUBLIC_ENV: string;
  PAGE_FRAME_SERVICE: string;
  S3S_SERVICE: string;
  STATICS_CDN: string;
  ZILLOW_STATICS_CDN: string;
  HOME_DETAILS_SERVICE_SCHEME: string;
  HOME_DETAILS_SERVICE_HOST: string;
  HOME_DETAILS_SERVICE_PORT: string;
  GOOGLE_MAPS_API_KEY_FOR_MAP_LIGHTBOX: string;
  GOOGLE_MAPS_API_KEY_FOR_CAROUSEL: string;
  GOOGLE_MAPS_API_KEY_FOR_MEDIA_WALL: string;
  GOOGLE_MAPS_API_KEY_FOR_CAROUSEL_SHARED_SRP_AND_HDP: string;
  GOOGLE_CAPTCHA_PUBLIC_KEY: string;
  COMSCORE_DEFAULT_BEACON_TYPE: string;
  COMSCORE_HOST: string;
  COMSCORE_ID: string;
  ZG_SEARCH_KONG_KEY: string;
  NEXT_PUBLIC_CLICKSTREAM_HOST_PORT: string;
  NEXT_PUBLIC_CLIENT_PROFILER_HOST_ID: string;
  NEXT_PUBLIC_SERVICE_VERSION: string;
  NEXT_PUBLIC_GDP_COMMON: string;
  FS_VR_MODEL_CDN_HOST: string;
  FS_FLOOR_MAP_CDN_HOST: string;
  FS_URL_BASE: string;
  PHOENIX_ADMIN_TOOL_ENDPOINT: string;
  KEYSTONE_SINK_URL: string;
}
