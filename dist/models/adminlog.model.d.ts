import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export interface AdminLog {
    readonly _id?: string;
    readonly user?: string;
    readonly type?: string;
    readonly data?: string;
    readonly createdAt?: string | Date;
    readonly updatedAt?: string | Date;
}
export interface AdminLogDocument extends AdminLog, Document {
    readonly _id: string;
}
export declare const AdminLogModel: mongoose.Model<mongoose.Document, {}>;
export declare const AdminLogModelProvider: {
    provide: string;
    useValue: mongoose.Model<mongoose.Document, {}>;
};
