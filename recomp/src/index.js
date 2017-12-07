import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import { mapProps, withProps, withState, setDisplayName, compose, branch, renderComponent } from 'recompose'

// mapProps() && withProps()
const mapper = props => ({ name: `${props.firstName} ${props.lastName}` })
const withNameOnly = mapProps(mapper);
const withNameAdded = withProps(mapper);
// const Name = props => <div>{props.name }</div>;
const Name = props => <div>{`${props.lastName}, ${props.name} `}</div>;
const EnhancedName = withNameAdded(Name);

// withState()
const withCounterState = withState('counter', 'setCounter', 0)
const Counter = withCounterState(({ counter, setCounter }) =>
  <div>
    Count:{counter}
    <div>
      <button onClick={() => setCounter(n => n + 1)}>Increment</button>
      <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
    </div>
  </div>
)

const BeseCounter = ({ counter, setCounter }) =>
  <div>
    Count:{counter}
    <div>
      <button onClick={() => setCounter(n => n + 1)}>Increment</button>
      <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
    </div>
  </div>

const CounterFromBaseCounter = withCounterState(BeseCounter)

const withCounterStateAndDisplayName = compose(
  withCounterState,
  setDisplayName('Counter'),
)

const CounterWithDisplayName = withCounterStateAndDisplayName(({ counter, setCounter }) =>
  <div>
    Count:{counter}
    <div>
      <button onClick={() => setCounter(n => n + 1)}>Increment</button>
      <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
    </div>
  </div>
)

const withLoader = branch(
  props => props.loading,
  renderComponent(props => <div>Just a minute, im loading ...</div>),
)

const NameWithLoader = withLoader(EnhancedName)

const App = () => (
  <div>
    <EnhancedName firstName="James" lastName="Bond" />
    {/*
      <NameWithLoader firstName="James" lastName="Bond" />
      <EnhancedName firstName="James" lastName="Bond" />
      <Counter />
      <CounterFromBaseCounter />
      <CounterWithDisplayName />
    */}
  </div>
);
  

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
