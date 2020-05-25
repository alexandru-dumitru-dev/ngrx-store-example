import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {postReducer} from './store/reducers/post.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostComponent} from './posts/components/post.component';
import { EditPostComponent } from './posts/components/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      post: postReducer
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
