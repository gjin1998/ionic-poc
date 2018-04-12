import { SubMarketCompetitiveComparison } from "app/assetPerformance/submarket/SubMarketCompetitiveComparison.model";
import { ActualGrossLeasing } from "app/shared/models/actualGrossLeasing.model";

export class LeasingPerformance {
    public id: number;
    public propertyId: number;
    public financialYearId: number;
    public currencyId: number;
    public submarketName: string;
    public submarketSize: number;
    public buildingShareOfSubmarket: number;
    public totalNewLeasings: number;
    public totalRenewals: number;
    public totalExpansions: number;
    public totalMoveOuts: number;
    public actualLeased: number;
    public createdBy: string;
    public updatedBy: string;
    public updatedDate: Date;
    public sourceSystem: string;
    public sourceKey: string;
    public actualGrossLeasings: Array<ActualGrossLeasing>;
    public subMarketCompetitiveComparisons: Array<SubMarketCompetitiveComparison>;
}
