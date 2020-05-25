import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from './posts/components/post.component';
import {EditPostComponent} from './posts/components/edit-post.component';

const routes: Routes = [
  {
    path: '', component: PostComponent
  },
  {
    path: 'edit', component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
