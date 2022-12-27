import React from 'react';
import { Search } from '@mui/icons-material';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterFollowButton
} from 'react-twitter-embed';
import './Widgets.css';

function Widgets () {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What&apos;s happening</h2>
        <TwitterTweetEmbed tweetId={'1600829337686913025'} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='wundergraphcom'
          options={{ height: 450 }}
        />
        <TwitterFollowButton
          screenName={'wundergraphcom'}
        />
        <TwitterShareButton
          url={'https://wundergraph.com/'}
          options={{ text: 'API Developer Platform' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
