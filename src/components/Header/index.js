import React, { Component } from 'react'
import { Header, Container, Box, Content, Logo, Toolbar, ToolbarItem } from './styles'

export default class First extends Component {
    render () {
        return (
            <Header>
                <Toolbar>
                    <ToolbarItem href="https://gitlab.com/thaua97">Gitlab</ToolbarItem>
                    <ToolbarItem href="https://gitlab.com/thaua97">Wiki</ToolbarItem>
                </Toolbar>
                <Box>    
                    <Container>
                        <Logo src={require('../../images/logo.png')} />
                        <Content>Aplicativo de auxilio de viagem pessoal.</Content>
                    </Container>
                </Box>
            </Header>
        )
    }
}
