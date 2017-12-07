import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import styles from './button.css';

const Container = props => <div className={styles.container}>{props.children}</div>

const Button = ({children}) => <button className={styles.button}>{children}</button>
const PrimaryButton = ({children}) => <button className={styles.primary}>{children}</button>
const LargeButton = ({children}) => <button className={styles.large}>{children}</button>
const LargePrimaryButton = ({children}) => <button className={styles.primaryLarge}>{children}</button>

const App = () => (
  <div>
    <Container>
      <Button>Button</Button>
    </Container>
    {/*
      <Container>
        <PrimaryButton>Button</PrimaryButton>
        <LargeButton>Large button</LargeButton>
        <LargePrimaryButton>Large primary button</LargePrimaryButton>
      </Container>
    */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
