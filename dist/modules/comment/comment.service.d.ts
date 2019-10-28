import { Model } from 'mongoose';
import { CommentDocument, Comment } from '../../models/comment.model';
import { ArticleDocument } from '../../models/article.model';
export declare class CommentsService {
    private readonly commentModel;
    private readonly articleModel;
    constructor(commentModel: Model<CommentDocument>, articleModel: Model<ArticleDocument>);
    create(newComment: Comment): Promise<CommentDocument>;
    getComment(id: any): Promise<CommentDocument>;
}
