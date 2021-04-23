import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Tweets = () => {
  return (
    <div className='center'>
      <h1>Tweets</h1>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='davido'
        options={{ height: 500, width: 500 }}
        noHeader
        noFooter
      />
    </div>
  );
};

export default Tweets;
