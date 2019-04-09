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
                            <ListTitle>About</ListTitle>
                            <ListItem>item 1</ListItem>
                            <ListItem>item 2</ListItem>
                            <ListItem>item 3</ListItem>
                        </List>
                        <List>
                            <ListTitle>About</ListTitle>
                            <ListItem>item 1</ListItem>
                            <ListItem>item 2</ListItem>
                            <ListItem>item 3</ListItem>
                        </List>
                        <List>
                            <ListTitle>About</ListTitle>
                            <ListItem>item 1</ListItem>
                            <ListItem>item 2</ListItem>
                            <ListItem>item 3</ListItem>
                        </List>
                    </Box>
                </Container>
            </Footer>
        )
    }
}