import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export interface Article {
    readonly _id?: string | mongoose.Types.ObjectId;
    readonly title: string;
    readonly content: string;
    readonly summary: string;
    readonly category: string;
    readonly commentCount?: number;
    readonly viewsCount?: number;
    readonly createdAt?: string | Date;
    readonly tags?: string[];
}
export interface ArticleDocument extends Article, Document {
    readonly _id: string;
}
export declare const ArticleSchema: mongoose.Schema<any>;
export declare const ArticleModel: mongoose.Model<mongoose.Document, {}>;
export declare const ArticleModelProvider: {
    provide: string;
    useValue: mongoose.Model<mongoose.Document, {}>;
};
