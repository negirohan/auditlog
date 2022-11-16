import { ErrorResponse } from "./error-response";

export interface BaseResponse {
    status_code: number,
    statusCode: number,
    Status: string,
    status: string,
    error: ErrorResponse
}
