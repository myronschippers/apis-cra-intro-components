import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
