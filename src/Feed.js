import React from 'react';
import Post from './Post';
import TweetBox from './TweetBox';
import './Feed.css';
import { useQuery } from './lib/wundergraph';

function Feed () {
  const tweets = useQuery({
    operationName: 'GetTweets',
    liveQuery: true,
    requiresAuthentication: false
  });

  const posts = [{
    displayName : "Test User",
    username : "testuser",
    verified : true,
    text : "This is the first tweet!",
    avatar : null,
    image : null
  }];

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox/>
      {tweets.data?.tweets_findManytweets?.map((tweet) => (
        <Post
          displayName={tweet.displayName}
          username={tweet.username}
          verified={tweet.verified}
          text={tweet.text}
          avatar={tweet.avatar}
          image={tweet.image}
          key={tweet.id}
        />
      ))}
    </div>
  );
}

export default Feed;
