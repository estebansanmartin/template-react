import React, { Component } from 'react'
import ImageParallax from 'react-image-parallax2'
import { ImageContent, BoxImage, LinkPortfolio } from '../styled/project.jsx'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <h1 className="title">PORT<br/>
                FOLIO
                </h1>
                    <p href="http://estebansanmartin.net/blog" target="_blank" className="link-portfolio">Blog personale sviluppato con Wordpress.</p>
                    <div className="link-wrapper">
                        <a className="link hover-3" href="http://estebansanmartin.net/blog" target="_blank">LINK</a>
                    </div>
                <ImageContent>
                    <ImageParallax
                    reduceHeight={1/3}
                    src={require('../assets/blog.png')}/>
                </ImageContent>

                <p href="#" target="_blank" className="link-portfolio">Sito web sviluppato con Bootstrap.</p>
                    <div className="link-wrapper">
                        <a className="link hover-3" href="http://estebansanmartin.net/es/restaurant/" target="_blank">LINK</a>
                    </div>
                <ImageContent>
                    <ImageParallax
                    reduceHeight={1/3}
                    src={require('../assets/restaurant.png')}/>
                </ImageContent>

                <p href="#" target="_blank" className="link-portfolio">Sito web aziendale sviluppato con Bootstrap.</p>
                    <div className="link-wrapper">
                        <a className="link hover-3" href="http://estebansanmartin.net/es/edilizia/" target="_blank">LINK</a>
                    </div>
                <ImageContent>
                    <ImageParallax
                    reduceHeight={1/3}
                    src={require('../assets/edile.png')}/>
                </ImageContent>

                <p href="#" target="_blank" className="link-portfolio">Sito web sviluppato con Foundation.</p>
                    <div className="link-wrapper">
                        <a className="link hover-3" href="http://estebansanmartin.net/es/" target="_blank">LINK</a>
                    </div>
                <ImageContent>
                    <ImageParallax
                    reduceHeight={1/3}
                    src={require('../assets/portfolio.png')}/>
                </ImageContent>

                

            </div>
        )
    }
}