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
        {tweets.map((tweet, i) => {
          return (
            <Tweet>
              {' '}
              tweet={JSON.stringify(tweet)} key={i}{' '}
            </Tweet>
          );
        })}
      </TweetContainer>
    );
  }
}
