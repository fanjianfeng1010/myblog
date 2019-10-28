/// <reference types="mongodb" />
import { Model } from 'mongoose';
import { Article, ArticleDocument } from '../../models/article.model';
import { CategoryDocument } from '../../models/category.model';
declare const markdown: any;
export { markdown };
export declare class ArticleService {
    private readonly articleModel;
    private readonly categoryModel;
    constructor(articleModel: Model<ArticleDocument>, categoryModel: Model<CategoryDocument>);
    create(articleDocument: Article): Promise<ArticleDocument>;
    update(_id: string, data: Article): Promise<ArticleDocument>;
    getArticles(query: {
        category?: string;
        tag?: string;
    }, option: {
        skip?: number;
        limit?: number;
        sort?: object;
    }): Promise<Article[]>;
    getCurrentArticles(): Promise<Article[]>;
    getArtile(id: string, isRenderHtml: boolean): Promise<any>;
    deleteArticle(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    countArticles(query: any): Promise<number>;
    batchDelete(articleIds: string[]): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
