import { SearchType } from "./searchType.model";

export class UserSearchField {
    id: number;
    searchTypeId: SearchType;
    fieldName: string;
    valueType: string;
    displayName: string;
}
