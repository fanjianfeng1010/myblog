import { Model } from 'mongoose';
import { UserDocument } from '../../models/user.model';
export declare class LoginService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    getFirstLoginInfo(): Promise<"没东西返回" | {
        mst: string;
    }>;
    login(data: any): Promise<string | {
        msg: string;
        data?: undefined;
    } | {
        data: {
            token: string;
        };
        msg?: undefined;
    }>;
}
