import { ArticleService } from './article.service';
import { Article, ArticleDocument } from '../../models/article.model';
import * as Joi from '@hapi/joi';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    static cIdSchema: {
        cid: Joi.StringSchema;
    };
    static idSchema: {
        id: Joi.StringSchema;
    };
    static deleteArticlesSchema: {
        articleIds: Joi.ArraySchema;
    };
    create(article: Article): Promise<IResponse<Article | string>>;
    update(params: {
        id: string;
    }, article: Article): Promise<IResponse<ArticleDocument>>;
    getArticles(query: {
        page: number;
        limit: number;
        cid: string;
        tag: string;
    }): Promise<any>;
    getCurrent(): Promise<any>;
    getArticle(params: {
        id: string;
    }, query: {
        md?: boolean;
    }): Promise<IResponse>;
    deleteArticle(params: {
        id: string;
    }): Promise<IResponse>;
    deleteArticles(body: {
        articleIds: string[];
    }): Promise<any>;
}
interface IResponse<T> {
    code: number;
    msg: string;
    data?: T;
    totalCount?: number;
}
export {};
