import {Action} from '@ngrx/store';
import {Post} from '../../posts/models/post.model';

export const EDIT_POST = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditPost implements Action {
  readonly type = EDIT_POST;

  constructor(public payload: Post) {
  }
}

export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All = Upvote | Downvote | Reset | EditPost;

