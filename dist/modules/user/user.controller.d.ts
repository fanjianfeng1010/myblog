import { UserService } from './user.service';
import { Request } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserLoginInfo(req: Request): Promise<import("../../models/user.model").UserDocument>;
}
