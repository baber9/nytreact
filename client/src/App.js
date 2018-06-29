
// Import React & ReactDOM
import React from 'react';
// import ReactDOM from 'react-dom';

// Import React Router
import { BrowserRouter, Route  } from 'react-router-dom';

// Import Logo - used in Footer
// import logo from './logo.svg';   for Footer Logo

// Import Pages
import Home from  './pages/Home';
// import Saved from './pages/Saved';

// Import CSS
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          {/* <Router exact path='/Saved' component={Saved} /> */}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;










// // Save for Footer
// <img src={logo} className="App-logo" alt="logo" />
