import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    getFirstLoginInfo(): Promise<"" | {
        msg: string;
    }>;
    login(body: any): Promise<{
        data: {
            msg: string;
            data?: undefined;
            token?: undefined;
        } | {
            data: {
                token: string;
            };
            msg?: undefined;
            token?: undefined;
        } | {
            token: string;
            msg?: undefined;
            data?: undefined;
        };
    }>;
    isLgon(): {
        isLogin: boolean;
    };
}
