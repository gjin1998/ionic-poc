import { PropertySizeType } from "../shared/models/propertySizeType.model";
import { PropertyStatus } from "../shared/models/propertyStatus.model";
import { SimpleUser } from "../shared/models/simpleUser.model";
import { PropertyType } from "../shared/models/propertyType.model";
import { LocalMarketArea } from "../shared/models/localMarketArea.model";
import { Division } from "../shared/models/division.model";
import { EngagementType } from "../shared/models/engagementType.model";
import { Country } from "../shared/models/country.model";
import { LeasingCompany } from "../shared/models/leasingCompany.model";
import { InvestorClient } from "../shared/models/investorClient.model";

export class FilterRequest{
  key: string;
  offset: number;
  limit: number;
  returnAll: boolean;
}
export class Property {
  propertyId: number;
  name: string;
  cbrePjmEngaged: boolean;
  _cbrePjmEngaged: cbrepjms; 
  inWatchList: boolean;
  _inWatchlist: inwatchlists;  
  propertySize: number;
  propertySizeTypeId: number;
  propertySizeType: PropertySizeType;
  investorClientId: number;
  investorClient: InvestorClient;
  propertyStatusId: number;
  propertyStatus: PropertyStatus;
  clientCareDirectorId: number;
  clientCareDirector: SimpleUser;
  fund: string;
  assetManager: string;
  proxyId: number;
  proxy: SimpleUser;
  propertyTypeId: number;
  propertyType: PropertyType;
  localMarketAreaId: number;
  localMarketArea: LocalMarketArea;
  divisionId: number;
  division: Division;
  engagementTypeId: number;
  engagementType: EngagementType;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  countryId: number;
  country: Country;
  postalCode: string;
  remId: number;
  realEstateManager: SimpleUser;
  leasingCompanyId?: number;
  leasingCompany: LeasingCompany;
  leasingAgent: string;
  createdBy: string;
  createdOn: Date;
  updatedBy: string;
  updatedDate: Date;
  isAsset: boolean;
  isAutomatic: boolean;
  statusModifiedBy: string;
  statusModifiedOn: Date;
  isAccounting: boolean;
}

export class PropertyVM {
  propertyId: number;
  name: string;
}

export class PropertySearchResponse {
  propertyId: number;
  propetyTypeId: number;
  name: string;
  addressLine1: string;
  addressLine2: string ;
  city: string;
  state: string;
  postalCode: string ;
  fund: string;
  propertySize: number;
  assetManager: string;
  proxyId: number;
  proxy: string;
  remId: number;
  realEstateManager: string;
  clientCareDirectorId ?: number;
  clientCareDirector ?: string;
  propertyStatus: string;
  engagementTypeId ?: number ;
  engagementType: string;
  investorClientId: number;
  client: string;
  propertySizeTypeId: number;
  propertySizeType: string;
  divisionId ?: number;
  localMarketAreaId ?: number;
  countryId: number;
  isAsset: boolean;
  isAutomatic: boolean;
  isPrimary: boolean;
  statusModifiedBy: string;
  statusModifiedOn: Date;
  isAccounting: boolean;
}

export class PropertySearchRequest {
  name: string;
  address: string;
  market: string;
  city: string;
  state: string;
  country: string;
  userSearchId: number = -1;
  userId: number;
  client: string;
  assetManager: string;
  fund: string;
  propertyType: string;
  propertySize: string;
  engagementType: string;
  realEstateManager: string;
  clientCareDirector: string;
  propertyStatus: string;
  limit: number;
  offSet: number;
  returnAll: boolean;
  isAsset: boolean;
  orderBy: string;
  sortDirection: string;
  isAdministrativeSearch: boolean;
}

export class PropertySearchPagingData {
  public data: PropertySearchResponse[];
  public limit: number;
  public offSet: number;
  public total: number;
  public returned: number;
}

export class ProxyToRemRequest {
  public ProxyId: number;
  public RemIds: Array<number>;
  public UserName: String;
}

export class PropertyProxiesRequest {
  public ProxyId: Array<number>;
  public RemIds: number;
  public UserName: String;
}

export class ProxyRemDeleteRequest {
  public ProxyIds: Array<number>;
  public RemId: number;
}

export class cbrepjms {
  public text: string;
  public value: boolean;
}

export class inwatchlists {
  public text: string;
  public value: boolean;
}
export const inwatchlistsData = [{ text: "Yes", value: true }, { text: "No", value: false }];

export const cbrePjmsData = [{ text: "Yes", value: true }, { text: "No", value: false }];
