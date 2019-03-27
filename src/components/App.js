import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Equipment from './Equipment';
import Account from './Account';
import Word from './Word';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header text='Powder bikes' button='Find Out More' />
        <Services />
        <Equipment />
        <Account />
        <Word />
      </div>
    );
  }
}

export default App;
