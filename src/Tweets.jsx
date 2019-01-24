import React, { Component } from 'react';
import styled from 'styled-components';
import tweets from './tweets.json';

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Tweet = styled.div`
  border: 1px solid gray;
`;

export default class Tweets extends Component {
  render() {
    return (
      <TweetContainer>
        {/* map over tweets array to spit out individual tweets */}
        {tweets.map((tweet, i) => {
          return (
            <Tweet>
              {' '}
              {/* give each tweet stringified JSON data and individual key */}
              tweet={JSON.stringify(tweet)} key={i}{' '}
            </Tweet>
          );
        })}
      </TweetContainer>
    );
  }
}
