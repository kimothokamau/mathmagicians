import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="*">
            <Quote />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
