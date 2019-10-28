import { PipeTransform } from '@nestjs/common';
export declare class JoiValidationPipeTransform implements PipeTransform {
    private readonly schema;
    constructor(schema: object);
    transform(value: any): any;
}
export declare const JoiValidationPipe: (schema: object) => (target: any, key?: string, descriptor?: any) => any;
