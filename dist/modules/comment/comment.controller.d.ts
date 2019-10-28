import { Comment, CommentDocument } from '../../models/comment.model';
import { CommentsService } from './comment.service';
export declare class CommentController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(comment: Comment): Promise<void>;
    getComment(query: {
        id: string;
    }): Promise<commentResponse>;
}
interface commentResponse {
    code: number;
    msg: string;
    data?: CommentDocument;
}
export {};
