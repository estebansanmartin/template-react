import React, { Component } from 'react'
import { form } from 'pure-css'



export default class Contact extends Component {
    render() {
        return (
        <div>
            <h1 className="title">CON<br/>
            TACT
            </h1>
            <h3 className="subtitle-form">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, tenetur accusantium quaerat molestias, veritatis, eligendi laborum vero dolorem ducimus sapiente omnis doloremque cumque nesciunt odit suscipit! Est quis eos neque.</h3>
            <div className="box-form">
                <form onSubmit="" className="pure-form">
                    <fieldset class="pure-group">
                        <input type="text" className="pure-input-1" placeholder="Name" required />
                        <input type="email" className="pure-input-1" placeholder="Email" required />
                    </fieldset>
                    <fieldset class="pure-group">
                        <textarea class="pure-input-1" placeholder="Text" required ></textarea>
                    </fieldset>
                    <button type="submit" class="pure-button pure-input-1-2 pure-button-primary">SIGN IN</button>
                </form>
            </div>
        </div>
        )
    }
}