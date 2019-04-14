import React, { Component } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'

export default class Home extends Component {
    render () {
        return (
            <div>
                <Header/>
                <About />
                <Contact />
            </div>
        )
    }

}