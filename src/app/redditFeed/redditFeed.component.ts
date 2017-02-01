/**
 * Created by ninja on 1/12/17.
 */
import {Component, OnInit} from "@angular/core";
import { RedditFeedService} from './redditFeed.service';
import {RedditFeed} from './RedditFeed';

@Component({
  selector:'redit-feed',
  templateUrl:'./redditFeed.template.html',
  styleUrls:['./RedditFeed.css']

})
export class RedditFeedComponent implements OnInit{
   feedList :RedditFeed[];
 constructor( private redditfeedservice : RedditFeedService){}

  ngOnInit(){
    this.getFeed();

  }
  getFeed(){
     this.redditfeedservice.getFeed()
      .subscribe(data=> { this.feedList = data;
             console.log(data);


      },error => { console.log(error);});

  }
}
/*
 this._reddits$ = this._http.get(this._redditDataUrl)
 .map(response => response.json())
 .map(json => <Array<any>>json.data.children)
 .map(children => children.filter(d=> (
 ['png','jpg'].indexOf(d.data.url.split('.').pop()) != -1
 )))
 .map(children => children.map(d => {
 return {
 id: d.data.id,
 title: d.data.title,
 imageUrl: d.data.header_img
 }
 }));
 */
