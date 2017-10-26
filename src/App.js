import React, { Component } from 'react';
import './App.css';

import { BagView } from './components'


const bags = [
  {
    'name': 'Fancy bag',
    'price': {
      'amount': 600,
      'unit': 'cents',
    },
    'description': 'Because you\'re fancy!',
  },
  {
    'name': 'Regular bag',
    'price': {
      'amount': 500,
      'unit': 'cents',
    },
    'description': 'Becase you\'re so normal!',
  },
  {
    'name': 'Cheap bag',
    'price': {
      'amount': 345,
      'unit': 'cents',
    },
    'description': 'Our cheapest bag, for the poor people',
  },
  {
    'name': 'Veggy bag',
    'price': {
      'amount': 440,
      'unit': 'cents',
    },
    'description': 'Our cheapest bag, for the poor people',
  },
  {
    'name': 'Singles bag',
    'price': {
      'amount': 315,
      'unit': 'cents',
    },
    'description': 'Our cheapest bag, for the poor people',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
        </p>
        <BagView bags={bags}/>
      </div>
    );
  }
}

export default App;
