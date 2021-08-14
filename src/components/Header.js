import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import about from './About'
import projects from './Projects'
import contact from './Contact'
import WelcomeImage from './main'

class Header extends React.Component {
  render() {
    return (

      <div>

        <nav className="navbar-expand-xl navbar-dark bg-dark">
          <div class="container">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="nav nav-pills nav-justified flex-column flex-sm-row">

                <li class="flex-sm-fill text-sm-center nav-item">

                  <Link to="/">Home</Link>
                </li>

                <li class="flex-sm-fill text-sm-center nav-item">
                  <Link to="/About">About</Link>
                </li>

                

                <li class="flex-sm-fill text-sm-center nav-item">
                  <Link to="/Contact">Contact</Link>
                </li>

         


              </ul>
            </div>
          </div>
        </nav>
        <Switch>
            <Route exact path="/About" component={about}/>
            <Route path="/Projects" component={projects} />
            <Route path="/Contact" component={contact} />
          </Switch>

      </div>
    )
  }
}

export default Header