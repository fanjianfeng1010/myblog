import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export interface User {
    readonly _id?: string;
    readonly type?: string;
    readonly account?: string;
    readonly password?: string;
    readonly createAt?: string | Date;
    readonly updateAt?: string | Date;
}
export interface UserDocument extends User, Document {
    readonly _id: string;
}
export declare const UserModel: mongoose.Model<mongoose.Document, {}>;
export declare const UserModelProvider: {
    provide: string;
    useValue: mongoose.Model<mongoose.Document, {}>;
};
