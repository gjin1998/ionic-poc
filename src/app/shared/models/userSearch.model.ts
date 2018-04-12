import { SearchType } from "./searchType.model";
import { UserSearchCriteria } from "./userSearchCriteria.model";
export class UserSearch {
    id: number;
    userId: number;
    userSearchType: SearchType;
    name: string;
    isDefault: boolean;
    isAsset: boolean;
    userSearchCriterias: UserSearchCriteria[] = [];

    constructor(uid?: number, searchType?: SearchType) { this.userId = uid; this.userSearchType = searchType}

}
