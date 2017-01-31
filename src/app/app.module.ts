import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


// app component
import { AppComponent } from './app.component';
import { RedditFeedComponent} from './redditFeed/redditFeed.component';
import { RedditFeedService} from './redditFeed/redditFeed.service';

const appRoutes: Routes = [
  {path:'crisis-center', component: RedditFeedComponent},
  { path:'heroes', component: RedditFeedComponent},
  { path:'',redirectTo: './redditFeed', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    RedditFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RedditFeedService],
  bootstrap: [RedditFeedComponent]
})
export class AppModule { }
