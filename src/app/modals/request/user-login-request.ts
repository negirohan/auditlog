export interface UserLoginRequest {
    LoginName: string,
    UserName: string,
    Password: string,
    TenantAlias: string,
    uiCaptchaKey?: string,
    googleRecaptchaResponse?: string
}
