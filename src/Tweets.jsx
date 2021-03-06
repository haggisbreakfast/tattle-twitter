import React, { Component } from 'react';
import styled from 'styled-components';
import tweetData from './tweetData.json';

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Tweet = styled.div`
  border: 1px solid gray;
  margin: 40px;
  height: 200px;
  padding: 20px;
  flex-direction: column;
`;

const TextContainer = styled.div`
  height: 150px;
`;
const ImageContainer = styled.div``;

export default class Tweets extends Component {
  render() {
    return (
      <TweetContainer>
        {/* map over tweets array to spit out individual tweets */}
        {tweetData.map((tweet, i) => {
          return (
            <Tweet key={i}>
              {' '}
              {/* give each tweet stringified JSON data and individual key */}
              <TextContainer>{JSON.stringify(tweet.text)}</TextContainer>
              <ImageContainer>
                <img src={tweet.profile_pic} width="40" alt="" />
              </ImageContainer>
            </Tweet>
          );
        })}
      </TweetContainer>
    );
  }
}
