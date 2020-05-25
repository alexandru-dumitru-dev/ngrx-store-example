import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Post} from '../models/post.model';
import * as PostActions from '../../store/actions/post.actions';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-edit-post',
  templateUrl: '../views/edit-post.component.html',
})
export class EditPostComponent implements OnInit {
  post: Observable<Post>;
  selectedPost: Post;

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private store: Store<AppState>) {
    this.post = this.store.select('post');
    this.post.subscribe(data => this.selectedPost = data);
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: [this.selectedPost ? this.selectedPost.title : ''],
      content: [this.selectedPost ? this.selectedPost.content : '']
    });
  }

  onSubmit(data) {
    const post: Post = {
      title: data.title,
      content: data.content,
      likes: this.selectedPost ? this.selectedPost.likes : 0
    };
    this.store.dispatch(new PostActions.EditPost({title: post.title, content: post.content, likes: this.selectedPost.likes}));
    this.router.navigate(['/']);
  }

}
