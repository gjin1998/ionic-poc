import { Month } from "./month.model";
import { FinancialPerformance } from "./financialPerformance.model"
export class FinancialPerformanceDetail {
    id: number;
    financiePerformance: FinancialPerformance;
    monthToString: string;
    month: Month;
    actualRevenue: number;
    budgetedRevenue: number;
    revenueVariance: number;
    revenueVariancePercentage: number;
    revenueVarianceNotes: string;
    actualExpense: number;
    budgetedExpense: number;
    expenseVariance: number;
    expenseVariancePercentage: number;
    expenseVarianceNotes: string;
    actualNOI: number;
    budgetedNOI: number;
    noiVariance: number;
    ytdnoiVariance: number;
    noiVarianceNotes: string;
    createdBy: string;
    createdOn: Date;
    modifiedBy: string;
    modifiedOn?: Date;
    showQuarterly: Boolean;
}
