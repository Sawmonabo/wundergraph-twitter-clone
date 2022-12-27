import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import './TweetBox.css';

function TweetBox () {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const user = {
    avatarUrl : "",
    email : "testuser@test.com",
    firstName : "Test",
    lastName : "User",
    name : "Test User",
  };


  const sendTweet = e => {
    e.preventDefault();

    if (tweetMessage) {
      console.log(`Sending tweet with message: ${tweetMessage}`);
      console.log(`Sending tweet with image: ${tweetImage}`);
    }

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <div className='tweetBox__input'>
        <Avatar src={user.avatarUrl} referrerPolicy='no-referrer' />
        <input
          value={tweetMessage}
          onChange={(textFieldContents) => setTweetMessage(textFieldContents.target.value)}
          placeholder="What's happening?"
          type='text'
        />
      </div>
      <input
        placeholder='Optional: Enter image URL'
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        type='text'
        className='tweetBox__imageInput'
      />
      <Button onClick={sendTweet} type='submit' className='tweetBox__button'>
        Tweet
      </Button>
    </div>
  );
}

export default TweetBox;
