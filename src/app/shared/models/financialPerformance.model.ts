import { FinancialYear } from "./financialYear.model";
import { FinancialPerformanceDetail } from "./financialPerformanceDetail.model";
import { OutstandingAccountReceivable } from './outstandingAccountReceivable.model';

export class FinancialPerformance {
    id: number;
    propertyId: number;
    financialYear: FinancialYear;
    totalActualRevenue: number;
    totalBudgetedRevenue: number;
    totalRevenueVariance: number;
    totalActualExpense: number;
    totalBudgetedExpense: number;
    totalExpenseVariance: number;
    totalActualNOI: number;
    totalBudgetedNOI: number;
    totalNOIVariance: number;
    createdBy: string;
    createdOn: Date;
    updatedBy: string;
    updatedOn?: Date;
    financialPerformanceDetails: FinancialPerformanceDetail[];
    outstandingAccountReceivables: OutstandingAccountReceivable[];
    isEditable: boolean;
}
