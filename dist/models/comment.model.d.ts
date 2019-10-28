import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export interface Comment {
    readonly _id: string;
    readonly nickName?: string;
    readonly content: string;
    readonly createdAt?: string | Date;
    readonly article?: string;
}
export interface CommentDocument extends Comment, Document {
    readonly _id: string;
}
export declare const CommentSchema: mongoose.Schema<any>;
export declare const CommentModel: mongoose.Model<mongoose.Document, {}>;
export declare const CommentModelProvider: {
    provide: string;
    useValue: mongoose.Model<mongoose.Document, {}>;
};
