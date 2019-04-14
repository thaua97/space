import React, { Component } from 'react'
import {
    Container, 
    Box, 
    Footer, 
    List, 
    ListTitle, 
    ListItem 
} from './styles'

export default class Contact extends Component {
    render () {
        return (
            <Footer>
                <Container>
                    <Box>
                        <List>
                            <ListTitle>Guia</ListTitle>
                            <ListItem>Protótipos</ListItem>
                            <ListItem>Wiki</ListItem>
                        </List>
                        <List>
                            <ListTitle>Tecnologias</ListTitle>
                            <ListItem>item 1</ListItem>
                            <ListItem>item 2</ListItem>
                            <ListItem>item 3</ListItem>
                        </List>
                        <List>
                            <ListTitle>Desenvolvedor</ListTitle>
                            <ListItem>github</ListItem>
                            <ListItem>gitlab</ListItem>
                            <ListItem>Portifolio</ListItem>
                        </List>
                    </Box>
                </Container>
            </Footer>
        )
    }
}