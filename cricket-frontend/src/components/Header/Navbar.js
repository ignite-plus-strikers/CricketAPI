import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Players from '../pages/Players'
import Teams from '../pages/Teams'
import NoMatch from '../pages/NoMatch'
import Home from '../pages/Home'
import image from '../../assets/logo.png'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Strikers</a><img
              src={image}
              alt="COVID-19"
              style={{ height: 40, width: 40, position: "relative" }}
            />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-5">
                    {/* <li class="nav-item active ml-5">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li> */}
                    <li class="nav-item active ml-5">
                        <a class="nav-link" href="/players">Players</a>
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
                        <li class="nav-item active ml-5">
                            <a class="nav-link" href="/teams">Teams</a>
                        </li>
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
            <section>
                <Router>
                    <Switch>
               
                        <Route exact="true" path="/" component={Home} />
                        <Route exact="true" path="/players" component={Players} />
                        <Route exact="true" path="/teams" component={Teams} />
                        <Route   component={NoMatch} />
        
                    </Switch>
                </Router>
            </section>
        </div>
    )
}

export default Navbar;