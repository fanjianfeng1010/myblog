import { Model } from 'mongoose';
import { UserDocument } from '../../models/user.model';
export declare class LoginService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    getFirstLoginInfo(): Promise<"" | {
        msg: string;
    }>;
    login(data: any): Promise<{
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
    }>;
}
