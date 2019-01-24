import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  body {
    font-family: 'Roboto Mono', monospace;
  }
`;

const TopContainer = styled.div`
  background: linear-gradient(#e7fff9 0%, #c1fff3 100%);
  max-height: 200px;
  display: flex;
  justify-content: space-between;
`;
const Header = styled.p`
  font-size: 40px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  border-right: 1px solid gray;
  width: 30%;
`;

const RightContainer = styled.div``;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <TopContainer>
          <Header>MOCK TWITTER</Header>
        </TopContainer>
        <MainContainer>
          <LeftContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultricies, lacus non ullamcorper aliquam, lectus mi iaculis lectus,
            eu venenatis justo diam interdum lectus. Quisque ac turpis at mauris
            sollicitudin tempor. Fusce feugiat dignissim odio, in sodales est.
            Mauris et mauris lobortis, tincidunt lectus id, pretium justo. In
            metus mauris, blandit sed molestie in, fermentum eu quam. Cras
            pellentesque velit felis, ac varius libero condimentum et. Cras eu
            condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Vestibulum semper fermentum tempor. Mauris ac nisi id
            sem tincidunt feugiat eget ac odio. Nunc porta massa ut accumsan
            pharetra. Cras blandit, magna eu congue cursus, lectus purus luctus
            felis, vitae porttitor neque leo sed mauris. Quisque suscipit augue
            varius risus congue facilisis. Cras sit amet egestas mauris. In
            vulputate tellus mollis tellus gravida, ut rhoncus eros tincidunt.
            Mauris at ex eu odio posuere tempus.
          </LeftContainer>
          <RightContainer />
        </MainContainer>
      </div>
    );
  }
}

export default App;
