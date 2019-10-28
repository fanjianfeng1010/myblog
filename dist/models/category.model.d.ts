import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export interface Category {
    readonly _id?: string | mongoose.Types.ObjectId;
    readonly name: string;
    readonly order: number;
    readonly articleCount: number;
    readonly createAt: string;
}
export interface CategoryDocument extends Category, Document {
    readonly _id: string;
}
export declare const CategoryModel: mongoose.Model<mongoose.Document, {}>;
export declare const CategoryModelProvider: {
    provide: string;
    useValue: mongoose.Model<mongoose.Document, {}>;
};
