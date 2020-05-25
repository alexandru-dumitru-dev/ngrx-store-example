import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Post} from '../models/post.model';
import * as PostActions from '../../store/actions/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-post',
  templateUrl: '../views/post.component.html'
})
export class PostComponent {
  post: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
    this.post.subscribe(
      data => console.log('Post', data)
    );
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

}
