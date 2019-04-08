import React, { Component } from 'react'
import { Header, Container, Content, Logo } from './styles'

export default class First extends Component {
    render () {
        return (
            <Header>
                <Container>
                    <Logo src={require('../../images/logo.png')} />
                    <Content>Aplicativo de auxilio de viagem</Content>
                </Container>  
            </Header>
        )
    }
}
