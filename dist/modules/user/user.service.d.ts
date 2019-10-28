import { UserDocument } from '../../models/user.model';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    getUserByAccount(account: string): Promise<UserDocument>;
}
