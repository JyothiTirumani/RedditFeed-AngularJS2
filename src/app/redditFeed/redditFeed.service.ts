
/**
 * Created by ninja on 1/12/17.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RedditFeedService{
  constructor(private http: Http){}
  private redditSubModule : string = "node";
   private url: string = "https://www.reddit.com/subreddits/search.json?q=reactjs";
  //"https://www.reddit.com/r/reactjs/.json";
     //"http://www.reddit.com/r/" + this.redditSubModule + "/new/.json?limit=50";
     //'https://www.reddit.com/r/redditdev/top.json';
  // 'http://www.reddit.com/r/subreddit/new.json?sort=new';
  // 'https://www.reddit.com/subreddits/search.json?q=reactjs'

  getFeed(): Observable<any>{
    return this.http.get(this.url)
      .map(response => response.json())
      .map(json => <Array<any>>json.data.children)
      .map(children => children.map(d => {
        return {
          id: d.data.id,
          title: d.data.title,
          imageUrl: d.data.thumbnail,
          subreddit_type : d.data.subreddit_type,
          subscribers : d.data.subscribers,
          public_description: d.data.public_description,
          ups : d.data.ups
        }
      }));
     // .map(this.extractData);
      //.catch(this.handleError);
  }

  extractData(res : Response){
    let  data = res.json();
    return data.map(json => <Array<any>>json.data.children)
      .map(children => children.filter(d=> (
        ['png','jpg'].indexOf(d.data.url.split('.').pop()) != -1
      )))
      .map(children => children.map(d => {
        return {
          id: d.data.id,
          title: d.data.title,
          imageUrl: d.data.header_img
        }
      }));;

  }
  handleError(err : Response){
    console.log(err);

  }
}
