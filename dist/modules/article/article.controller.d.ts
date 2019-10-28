/// <reference types="hapi__joi" />
import { Article, ArticleDocument } from '../../models/article.model';
import { ArticlesService } from './article.service';
import Joi = require('@hapi/joi');
export declare class ArticlesController {
    private readonly articleService;
    constructor(articleService: ArticlesService);
    static cIdSchema: {
        cid: Joi.StringSchema;
    };
    static idSchema: {
        id: Joi.StringSchema;
    };
    static deleteArticleSchema: {
        articleIds: Joi.ArraySchema;
    };
    create(article: Article): Promise<void>;
    update(param: {
        id: string;
    }, article: Article): Promise<void>;
    getArticle(query: {
        id: string;
    }): Promise<ArticleResponse>;
    getArticles(query: {
        page: number;
        limit: number;
        cid: string;
        category: string;
    }): Promise<ArticlesResponse>;
}
interface ArticlesResponse {
    code: number;
    msg: string;
    data?: ArticleDocument[];
}
interface ArticleResponse {
    code: number;
    msg: string;
    data?: ArticleDocument;
}
export {};
