import { TenantInfoConfig } from "./tenant-info-config";

export interface TenantInfo {
    alias: string,
    config_keys: TenantInfoConfig,
    id: number,
    is_consultant: boolean,
    is_encrypted?: boolean,
    isEuTenant: boolean,
    key_field?: string,
    login_strategy?: string,
    logo1?: string,
    presentation_id?: number,
    secure_config_info?: string,
    tenant_name: string,
    type: number,
    ui_hcaptcha_key: string,
    ui_hcaptcha_version?: string,
    ui_recapcha_key: string,
    ui_recaptcha_version?: string,
    use_default_db: boolean
}
