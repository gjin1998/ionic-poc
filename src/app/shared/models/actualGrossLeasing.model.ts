import { Month } from "./month.model";
export  class ActualGrossLeasing {
    id: number;
    assetPerformanceId: number;
    monthToString: string;
    month: Month;
    newLeasing: number;
    renewals: number;
    expansions: number;
    moveouts: number;
    actualLeased: number;
    budgetedOccupance: number;
    varianceToBudget: number;
    netAbsorption: number;
    createdBy: string;
    createdOn: Date;
    modifiedBy: string;
    modifiedOn?: Date;
    private _q: number;
    get quarter(): number {
        if ( this.month === Month.January || this.month === Month.February || this.month === Month.March ) {
            this._q = 1;
        }
        if ( this.month === Month.April || this.month === Month.May || this.month === Month.June ) {
            this._q = 2;
        }
        if ( this.month === Month.July || this.month === Month.August || this.month === Month.September ) {
            this._q = 3;
        }
        if ( this.month === Month.October || this.month === Month.November || this.month === Month.December ) {
            this._q = 4;
        }
        return this._q;
    }
    set quarter(q: number) {
        this._q = q;
    }
}
