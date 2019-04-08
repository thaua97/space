import React, { Component } from 'react'
import { Section, Container, Box, Text, Card, CardImage, CardContent, CardTitle, CardText } from './styles'

export default class Making extends Component {
    render () {
        return (
            <Section>
                <Container>
                    <Box>
                        <Text>Algumas Funcionalidades</Text>
                    </Box>
                    <Box>
                        <Card>
                            <CardImage src={require('../../images/clima.png')} />
                            <CardContent>
                                <CardTitle>Previsão Climatica</CardTitle>
                                <CardText>Teste 2 do teste jaisodaj  ajsiodjasdiaj</CardText>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardImage src={require('../../images/mochila.png')} />
                            <CardContent>
                                <CardTitle>Organização de bagagem</CardTitle>
                                <CardText>Teste 2 do teste jaisodaj  ajsiodjasdiaj</CardText>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardImage src={require('../../images/local.png')} />
                            <CardContent>
                                <CardTitle>Locais ideias</CardTitle>
                                <CardText>Teste 2 do teste jaisodaj  ajsiodjasdiaj</CardText>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Section>
        )
    }
}