import * as PostActions from '../actions/post.actions';
import {Post} from '../../posts/models/post.model';

export type Action = PostActions.All;

const defaultState: Post = {
  title: 'Hello World!',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in neque felis. Nullam in aliquam justo. ' +
    'Morbi condimentum tempor sagittis. Mauris dapibus nec enim sed molestie. Nam hendrerit ultricies semper. ' +
    'Mauris congue aliquam diam laoreet ornare. Duis consequat velit lacus, in interdum justo pretium ut. ' +
    'Vivamus ultricies auctor dui, id facilisis enim imperdiet at.',
  likes: 0
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer(state: Post = defaultState, action: Action) {

  switch (action.type) {
    case PostActions.EDIT_POST:
      return newState(state, action.payload);
    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes + 1});
    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes - 1});
    case PostActions.RESET:
      return defaultState;
    default:
      return state;
  }
}
