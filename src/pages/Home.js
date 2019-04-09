import React, { Component } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Making from '../components/Making'
import Update from '../components/Updates'

export default class Home extends Component {
    render () {
        return (
            <div>
                <Header/>
                <About />
                <Making />
                <Update />
            </div>
        )
    }

}