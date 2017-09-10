import React, { Component } from 'react'
import { BoxImage } from '/Users/x/Documents/web/reactjs/app-reactiva/src/components/styled/project.jsx'

export default class Skill extends Component {
    render() {
        return (
            <div>
                <h1 className="title">SKI<br/>
                LL
                </h1>
                <BoxImage>
                <h2 className="title-skill">WEB DESIGN</h2>
                    <ul>
                        <div className="list-skill">HTML5 ////////</div>
                        <div className="list-skill">CSS3 ////////</div>
                        <div className="list-skill">JAVASCRIPT ////</div>
                        <div className="list-skill">WORDPRESS ///////</div>
                        <div className="list-skill">JOOMLA ///////</div>
                        <div className="list-skill">BOOTSTRAP ////////</div>
                        <div className="list-skill">MATERIALIZE ////////</div>
                    </ul>
                </BoxImage>
                <BoxImage>
                <h2 className="title-skill">GRAFICA</h2>
                    <ul>
                        <div className="list-skill">PHOTOSHOP ////////</div>
                        <div className="list-skill">ILLUSTRATOR ////////</div>
                        <div className="list-skill">BRAND ///////</div>
                        <div className="list-skill">RITOCO FOTOGRAFICO ///////</div>
                        <div className="list-skill">DEPLIANTISTICA ///////</div>
                    </ul>
                </BoxImage>
                <BoxImage>
                <h2 className="title-skill">WEB MARKETING</h2>
                    <ul>
                        <div className="list-skill">SEO ////</div>
                        <div className="list-skill">SEM ////</div>
                        <div className="list-skill">SOCIAL MEDIA /////</div>
                        <div className="list-skill">EMAIL MARKETING ////</div>
                        <div className="list-skill">ANALYTICS /////</div>
                    </ul>
                </BoxImage>
            </div>
        )
    }
}
