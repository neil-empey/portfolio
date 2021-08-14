import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeImage from './components/main'
import Header from './components/Header'
import about from './components/About'
import projects from './components/Projects'
import contact from './components/Contact'
import Images from './components/Images'
import { Link, Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (

      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={WelcomeImage} />
        </Switch>

      </div>

    );
  }
}

export default App;
