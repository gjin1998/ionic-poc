import { FinancialPerformance } from './financialPerformance.model';
import { Quarter } from '../../shared/models/quarter.model';

export class OutstandingAccountReceivable {
    id: number;
    financialPerformance: FinancialPerformance;
    quarterId: number;
    quarterToString: String;    
    zeroToThirtyDays: number;
    thirtyToSixtyDays: number;
    sixtyToNinetyDays: number;
    overNinetyDays: number;
    totalOutstanding: number;
    arComment: string;
    createdBy: string;
    createdOn: Date;
    modifiedBy: string;
    modifiedOn: Date;
    sourceSystem: string;
    sourceKey: string;
}
