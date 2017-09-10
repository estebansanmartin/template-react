import React, { Component } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'
import Logo from './assets/logo-cyan.png'
import { menus } from 'pure-css'
import Home from './pages/Index'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

class App extends Component {
  constructor(...props){
    super(...props)

    this.state = {
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

handleOnClick(e) {
  document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked')
  document.getElementById('toggle').classList.toggle('x')
}

  render() {
    return (
      <div>
      <Router>
      <div>
          <header className="custom-menu-wrapper">
              <div className="pure-menu custom-menu custom-menu-top">
              <a href="./" className="pure-menu-heading custom-menu-brand">
              <img className="logo" src={Logo} alt="Logo" href="#"/>
              </a>
              <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
              </div>
              <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
              <div className="custom-menu-screen"></div>
                <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>HOME</Link>
                  </li>
                  <li className="pure-menu-item">
                    <Link to="/Skill" className="pure-menu-link" onClick={this.handleOnClick}>SKILL</Link>
                  </li>
                  <li className="pure-menu-item">
                    <Link to="/Portfolio" className="pure-menu-link" onClick={this.handleOnClick}>PORTFOLIO</Link>
                  </li>
                  <li className="pure-menu-item">
                    <Link to="/Contact" className="pure-menu-link" onClick={this.handleOnClick}>CONTACT</Link>
                  </li>
                </ul>
              </div>
          </header>
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Skill' component={Skill} />
              <Route path='/Portfolio' component={Portfolio} />
              <Route path='/Contact' component={Contact} />
            </Switch>
          </main>
      </div>
  </Router>
  <footer><a href="http://estebansanmartin.net" target="_blank">&copy; 2017 ESTEBAN SAN MARTIN</a></footer>
  </div>
    );
  }
}

export default App
