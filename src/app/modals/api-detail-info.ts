export interface ApiDetailInfo {
    api_respond_on: string,
    app_name: string,
    client_id?: number,
    client_public_ip: string,
    created_on: string,
    custom_hdr?: string,
    guid: string,
    is_payloads_in_s3: boolean,
    lambda_app_header_text: string,
    local_ip: string,
    request_payload: string,
    request_payload_s3_path?: string,
    request_received_on: string,
    request_url: string,
    response_payload_s3_path?: string,
    tenant_id: number,
    time_to_process: number,
    user_id: number,
    user_type_text: string,
    x_host: string
}
