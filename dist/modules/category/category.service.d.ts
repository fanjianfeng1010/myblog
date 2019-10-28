import { Model } from 'mongoose';
import { Category, CategoryDocument } from '../../models/category.model';
import { ArticleDocument } from 'src/models/article.model';
export declare class CategoryService {
    private readonly categoryModel;
    private readonly ArticleModel;
    constructor(categoryModel: Model<CategoryDocument>, ArticleModel: Model<ArticleDocument>);
    create(newCategory: Category): Promise<CategoryDocument>;
    getCategory(id: string): Promise<CategoryDocument>;
    getCategories(): Promise<CategoryDocument[]>;
    update(id: string, data: Category): Promise<CategoryDocument>;
    deleteCategory(id: string): Promise<ResponseMsg>;
    batchDelete(categoryIds: string[]): Promise<any>;
}
interface ResponseMsg {
    msg: string;
    code: number;
}
export {};
