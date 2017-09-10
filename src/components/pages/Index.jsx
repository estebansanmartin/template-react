import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-home">
                    <h2 className="title-container">ESTEBAN SAN MARTIN</h2>
                    <h3 className="subtitle-container">WEB DESIGNER</h3>
                </div>
                <div className="container-social">
                <h5 className="title-social">CONTATTAMI</h5>
                    <div className="container-items">
                        <a className="link-home" href="http://estebansanmartin.net" target="_blank"><i className="fa fa-code"></i></a>
                        <a className="link-home" href="https://twitter.com/resourcesantips" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a className="link-home" href="mailto:es@estebansanmartin.net"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}