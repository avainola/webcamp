import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import styled from 'styled-components';

const color = '#0099ff';

// styling element
const Container = styled.div`
  margin: 10px;
  text-align: center;
`;

// styling component
// authors encourage not to use styled('tagname') directly
// but you should use this when styling React component
const Div = () => <div/>
const AlsoContainer = styled(Div)`
  margin: 10px;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${props =>
    props.primary ? `${color}` : '#ffffff'
  };
  color: ${props => 
    props.primary ? '#ffffff' : `${color}`
  };
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
    width: 90%;
  }
`;

// Extending styled component with more css
const LargeButton = Button.extend`
  padding: 16px 64px;
  font-size: 1.2rem;
`;

// Using different element with same css
const LinkButton = Button.withComponent('a')

// Passing props to styled component
const LargeButtonWithClassLarge = styled(LargeButton).attrs({
	className: 'large',
})``;
const LargePrimaryButton = styled(LargeButton).attrs({
	primary: 'true',
})``;

const SpecialContainer = styled.div`
  margin: 10px;
  text-align: center;
  ${Button} {
    color: red;
    border-color: red;
  }
`;

const App = () => (
  <div>
    <Container>
        <Button>Button</Button>
    </Container>
    {/*
      <Button primary>Button</Button>
      <Container>
        <LinkButton>Link</LinkButton>
      </Container>
      <Container>
        <LargeButton>Large Button</LargeButton>
      </Container>
      <Container>
        <LargeButtonWithClassLarge>Large Button with class "large"</LargeButtonWithClassLarge>
        <LargePrimaryButton>Large Primary Button</LargePrimaryButton>
      </Container>
      <AlsoContainer></AlsoContainer>
      <SpecialContainer>
        <Button>Button</Button>
      </SpecialContainer>
    */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
