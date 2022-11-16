import { BaseResponse } from "./base-response";
import { TenantInfo } from "../tenant-info";

export interface TenantDetailsResponse extends BaseResponse  {
    TenantInfo: TenantInfo
}
