import React, { Component } from 'react';
import styled from 'styled-components';
import tweets from './tweets.json';

export default class Tweets extends Component {
  render() {
    return (
      <div className="Tweets">
        {tweets.map((tweet, i) => {
          return (
            <div>
              tweet={tweet} key={i}
            </div>
          );
        })}
      </div>
    );
  }
}
