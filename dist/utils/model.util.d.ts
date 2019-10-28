import { Model, Document } from 'mongoose';
export declare function getModelToken(modelName: string): string;
export declare const getProviderByModel: (model: Model<Document, {}>) => {
    provide: string;
    useValue: Model<Document, {}>;
};
export declare const InjectModel: <T extends Document>(model: Model<T, {}>) => (target: Object, key: string | symbol, index?: number) => void;
