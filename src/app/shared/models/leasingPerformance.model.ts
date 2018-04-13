

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
   
}
