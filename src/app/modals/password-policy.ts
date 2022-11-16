export interface PasswordPolicy {
    Id: number,
    IsPwdChangeInFirstLogin: boolean,
    NumCapital: number,
    NumCharacter: number,
    NumLastPasswordNotAllowed?: string,
    NumNumeric: number,
    NumSmall: number,
    NumSpecial: number,
    PwdExpiryLimitInDays: number
}
