import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    getFirstLoginInfo(): Promise<"没东西返回" | {
        mst: string;
    }>;
    login(body: any): Promise<{
        statusText: string;
        data: any;
    }>;
    isLgon(): {
        isLogin: boolean;
    };
}
