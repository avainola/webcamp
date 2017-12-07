import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// HOC with class component
const withNameReact = WrappedComponent => {
  return class extends React.Component {
    render() { 
      return <WrappedComponent name="React" {...this.props} />; 
    }
  }
}
const Hello = ({ name }) => <h1>Hello, {name}!</h1>;
const HelloReact = withNameReact(Hello);

const Goodbye = ({ name }) => <h1>Goodbye, {name}!</h1>;
const GoodbyReact = withNameReact(Goodbye)

// HOC with functional Component
const withSeparator = WrappedComponent => 
  props =>
    <div>
      <hr/>
      <WrappedComponent {...this.props} />
    </div>

const GoodbyeReactWithSeparator = withSeparator(GoodbyReact)


// more practical example
const withFocusLog = WrappedComponent =>
  props =>
    <WrappedComponent {...this.props} onFocus={() => { console.log('focused')} } />

const Input = props => <input {...props} />

const InputWithFocusLog = withFocusLog(Input)

const App = () =>
  <div className="container">
    <HelloReact/>
    {/*
      <InputWithFocusLog />
      <GoodbyeReactWithSeparator/>
      <GoodbyReact/>
    */}
  </div>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
