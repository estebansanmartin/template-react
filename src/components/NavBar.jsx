import React, { Component } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
  } from 'react-router-dom'
import './App.css'
import { menus } from 'pure-css'
import Home from './pages/'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

class NavBar extends Component {
    constructor(...props) {
        super(...props)

        this.state = {}
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(e) {
        document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked')
        document.getElementById('toggle').classList.toggle('x')
    }

    render() {
        return (
            <Router>
                <div>
                    <header className="custom-menu-wrapper">
                        <div className="pure-menu custom-menu custom-menu-top">
                        <a href="#" className="pure-menu-heading custom-menu-brand">Brand</a>
                        <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
                        </div>
                        <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                        <div className="custom-menu-screen"></div>
                        <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog</a></li>
                        </ul>
                        </div>
                    </header>
                </div>
            </Router>
        )
    }
}

export default NavBar