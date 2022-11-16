import { PaginationConfig } from "./pagination-config";

export interface ApiDetailsRequest {
    IsResponsePayloadIncluded: boolean,
    invokedDates: string[],
    tenantAlias: string,
    userIds: number[],
    appNames: string[],
    getS3Payloads: boolean,
    fetchDataFromES: boolean,
    pagination: PaginationConfig
}
