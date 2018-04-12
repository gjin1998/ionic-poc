import { ActualGrossLeasing } from "./actualGrossLeasing.model";
import { Property } from "../../administration/property/property.model";
import { FinancialYear } from "./financialYear.model";
export class AssetPerformance {
    id: number;
    propertyId: number;
    property: Property;
    financialYearId: number;
    financialYear: FinancialYear;
    totalOutstanding: number;
    sixtyToNinetyDays: number;
    overNinetyDays: number;
    accountsReceivableComments: string;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate?: Date
    currencyId: number;
    totalRevenueVariance: number;
    operatingExpensesVariance: number;
    netOperatingIncomeVariance: number;
    tempUploadId: number;
    version: number;
    totalNewLeasing: number;
    totalRenewals: number;
    totalExpansions: number;
    totalMoveouts: number;

    actualGrossLeasing: ActualGrossLeasing[];
}
