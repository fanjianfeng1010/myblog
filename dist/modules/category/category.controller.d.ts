import { CategoryService } from './category.service';
import { Category } from '../../models/category.model';
import * as Joi from '@hapi/joi';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    static idSchema: {
        id: Joi.StringSchema;
    };
    static deleteCategoriesSchema: {
        categoryIds: Joi.ArraySchema;
    };
    create(category: Category): Promise<{
        data: Category;
    }>;
    update(params: {
        id: string;
    }, category: Category): Promise<Category>;
    getCategories(query: {
        page: number;
        limit: number;
    }): Promise<Category[]>;
    getCategory(params: {
        id: string;
    }): Promise<Category>;
    delteCategory(params: {
        id: string;
    }): Promise<any>;
    deleteCategories(body: {
        categoryIds: string[];
    }): Promise<any>;
}
