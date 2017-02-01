/**
 * Created by ninja on 1/12/17.
 */
/* Create a responsive HTML page that displays the subreddits retrieved from this API call in a table format.
The columns of this table should be the title of the subreddit,
 the number of subscribers, and the public description.
  Each data row should alternate between grey background and white background.
  */

export class RedditFeed{
 public id: number;
 public title:string;
 public imageUrl: string;
  public subreddit_type : string;
  public public_description : string;
  public subscribers: string;
  public ups: string;
}
