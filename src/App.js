import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

      <div class="page-header">
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h5>Học tiếng anh giao tiếp online 1 kèm 1</h5>
            <a href="/">
              <img src="https://d1atgierv9op2.cloudfront.net/images/home_index/logo_rarejob.png" alt="logo"></img>
            </a>
          </div>

          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">

            <button class="btn btn-lg btn-facebook" type="button">
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </button>
          <header class="c-header c-header-light px-3">

            <button class="c-header-toggler" type="button">
              <span class="c-header-toggler-icon"></span>
            </button>
            <ul class="c-header-nav mr-auto">
              <li class="c-header-nav-item active">
                <a class="c-header-nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="c-header-nav-item">
                <a class="c-header-nav-link" href="/">Link</a>
              </li>
              <li class="c-header-nav-item dropdown">
                <a class="c-header-nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/">Action</a>
                  <a class="dropdown-item" href="/">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/">Something else here</a>
                </div>
              </li>
              <li class="c-header-nav-item">
                <a class="c-header-nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </header>
        </div>

      </div>
      </div >
    );
  }
}

export default App;
