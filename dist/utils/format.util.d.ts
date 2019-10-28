interface IResponse<T> {
    code: number;
    msg: string;
    data?: T;
    totalCount?: number;
}
export declare function formatResponse<T>(data: T | string): IResponse<T | string>;
export {};
