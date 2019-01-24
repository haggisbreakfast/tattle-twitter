import React, { Component } from 'react';
import styled from 'styled-components';
import tweets from './tweets.json';

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Tweets extends Component {
  render() {
    return (
      <TweetContainer>
        {tweets.map((tweet, i) => {
          return (
            <div>
              tweet={tweet} key={i}
            </div>
          );
        })}
      </TweetContainer>
    );
  }
}
