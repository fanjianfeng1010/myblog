import { Model } from 'mongoose';
import { Article, ArticleDocument } from '../../models/article.model';
import { CategoryDocument } from '../../models/category.model';
export declare class ArticlesService {
    private readonly articleModel;
    private readonly categoryModel;
    constructor(articleModel: Model<ArticleDocument>, categoryModel: Model<CategoryDocument>);
    create(articleDocument: Article): Promise<ArticleDocument>;
    update(_id: string, data: Article): Promise<void>;
    getArticle(id: string): Promise<ArticleDocument>;
    deleteArticle(id: string): Promise<string>;
    getArticles(query: {
        category?: string;
    }, option: {
        page?: number;
        limit?: number;
        sort?: object;
    }): Promise<ArticleDocument[]>;
    count(query: any): Promise<number>;
}
