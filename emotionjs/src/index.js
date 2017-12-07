import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import styled, { css } from 'react-emotion';

const color = '#0099ff';

// no API for creating styled component using 'styled.tag'
// const Container = styled.div`
//   text-align: center;
// `
const Container = styled('div')`
  text-align: center;
`

const Button = styled('button')`
  background-color: ${props => props.primary ? `${color}` : '#ffffff'};
  color: ${props => props.primary ? '#ffffff' : `${color}`};
  border: 2px solid ${color};
  margin: 8px;
  padding: 8px 32px;
  border-radius: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    position: relative;
    top: 2px;
  }
  @media (max-width: 480px) {
    width: 160px;
  }
`;

// no extend API in emotion
// const LargeButton = Button.extend`
//   padding: 16px 64px;
//   font-size: 1.2rem;
// `;

// create a CSS class that can be used with component className prop
const purpleStyle = css`
  color: rebeccapurple;
  border-color: rebeccapurple;
`

// composing styles
const button = css`
  margin: 8px;
  padding: 8px 32px;
  border-radius: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    position: relative;
    top: 2px;
  }
  @media (max-width: 480px) {
    width: 160px;
  }
`;

const buttonColors = props => css`
  background-color: ${props.primary ? `${color}` : '#ffffff'};
  color: ${props.primary ? '#ffffff' : `${color}`};
  border: 2px solid ${color};
`;

const LargeButton = styled('button')`
  ${button};
  ${buttonColors};
  padding: 16px 64px;
  font-size: 1.2rem;
`;

// Using different element with same css
const LinkButton = Button.withComponent('a')

const App = () => (
  <div>
    <Container>
      <Button>Button</Button>
      <LargeButton>Large button</LargeButton>
    </Container>
    {/*
      <Button primary>Button</Button>
      <Button className={purpleStyle}>Button</Button>
    */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
