import React from 'react'
import Images from './Images'
import Header from './Header'
import about from './About'
import projects from './Projects'
import contact from './Contact'
import { Link, Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";


class WelcomeImage extends React.Component {

  render() {

    return (

      <div>
          
        <header>
          <div class="overlay"></div>

          <Images />

          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class="display-3"></h1>
                <p class="lead mb-0"></p>
              </div>
            </div>
          </div>
        </header>


        <section class="my-1 bg-dark" >
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto">
                <h2 class="text-info bg-dark">Neil Empey</h2>
                <h3 class="text-primary bg-dark"><strong><i>Elegant solutions to complex problems distilled here.</i></strong></h3><br></br><h4 class="text-info bg-dark"> <em>Everything I work on, I believe in. </em></h4>
                <br></br><h4 class="text-info bg-dark"><em>Engineering the way forward to a more sustainable, tolerant and optimistic future. </em></h4>
                <br></br>
                <h4 class="mb-0 text-info bg-dark">
                  <strong>Fullstack Developer & Backwoods, Wildlands Wildman</strong>
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default WelcomeImage