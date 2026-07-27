import { email, object, string, Validator, withMessage } from "solaris-common";

export interface AuthLoginRequest {
    email: string;
    password: string;
}

export const parseAuthLoginRequest: Validator<AuthLoginRequest> = object({
    email: withMessage(email, 'Email is required and must be a valid email address.'),
    password: withMessage(string, 'Password is required.'),
});
