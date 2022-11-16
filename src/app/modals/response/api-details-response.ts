import { ApiDetailInfo } from "../api-detail-info";
import { BaseResponse } from "./base-response";

export interface ApiDetailsResponse extends BaseResponse  {
    data: ApiDetailInfo
}
