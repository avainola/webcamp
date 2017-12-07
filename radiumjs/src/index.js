import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import radium, { StyleRoot } from 'radium';

const color = '#0099ff';

const styles = {
  conatiner: {
    margin: '10px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    color: color,
    border: `2px solid ${color}`,
    margin: '8px',
    padding: '8px 32px',
    borderRadius: '5px',
    fontSize: '1rem',
    textTransform: 'uppercase',
    ':hover': {
      opacity: 0.7,
    },
    ':active': {
      position: 'relative',
      top: '2px',
    },
    primary: {
      backgroundColor: color,
      color: '#ffffff',
    },
    large: {
      padding: '16px 64px',
      fontSize: '1.2rem',
    },
    '@media (max-width: 480px)': {
      width: '90%',
    }
  },
}

const $Container = ({children}) => 
  <div style={styles.conatiner}>{children}</div>
const Container = radium($Container)

const $Button = () => 
  <button style={styles.button}>Button</button>
const Button = radium($Button)

const $PrimaryButton = () =>
  <button style={[styles.button, styles.button.primary]}>Primary button</button>
const PrimaryButton = radium($PrimaryButton)

const $LargeButton = () =>
  <button style={[styles.button, styles.button.large]}>Large button</button>
const LargeButton = radium($LargeButton)

const $LargePrimaryButton = () => 
  <button style={[styles.button, styles.button.large, styles.button.primary]}>Large primary button</button>
const LargePrimaryButton = radium($LargePrimaryButton)


const App = () => (
  <StyleRoot>
    <div>
      <Container>
        <Button>Button</Button>
      </Container>
      {/*
        <PrimaryButton>Button</PrimaryButton>
        <Container>
          <LargeButton>Large button</LargeButton>
          <LargePrimaryButton>Large primary button</LargePrimaryButton>
        </Container>
      */}
    </div>
  </StyleRoot>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
