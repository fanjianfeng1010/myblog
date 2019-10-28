/// <reference types="mongodb" />
import { Model } from 'mongoose';
import { Category, CategoryDocument } from '../../models/category.model';
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    create(newCategory: Category): Promise<Category>;
    update(id: string, data: Category): Promise<Category>;
    getCategories(query: {}, option: {
        skip?: number;
        limit?: number;
        sort?: object;
    }): Promise<Category[]>;
    getCategory(id: string): Promise<Category>;
    delete(id: string): Promise<any>;
    batchDelete(categoryIds: string[]): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
