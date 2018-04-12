export class InvestorClient {
    investorClientId: number;
    name: string;
    description: string;
    active: boolean;
    createdBy: string;
    createdOn: Date;
    modifiedBy: string;
    modifiedOn ?: Date;
    isFinancials_Automated: boolean;
}

export class InvestorClientResponse {
    investorClients: Array<InvestorClient>;
    total: number;
}
