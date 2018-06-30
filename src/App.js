
// Import React & ReactDOM
import React from 'react';

// Import React Router
import { BrowserRouter, Route  } from 'react-router-dom';

// Import Logo - used in Footer
// import logo from './logo.svg';   for Footer Logo

// Import Pages
import Home from  './pages/Home';
import Saved from './pages/Saved';

// Import CSS
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
          </switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;










// // Save for Footer
// <img src={logo} className="App-logo" alt="logo" />
