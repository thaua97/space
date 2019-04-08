import React, { Component }  from 'react'
import { Section, Container, Title, Text, Content, Box, Image } from './styles'

export default class First extends Component {
    render () {
        return (
            <Section>
                <Container>
                   <Box>
                        <Content>
                            <Title>Sobre o App</Title>
                            <Text>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</Text>
                            <Text>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</Text>
                            <Text>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</Text>
                        </Content>
                        <Content>
                            <Image src={require('../../images/app.png')} />
                        </Content>   
                   </Box>
                </Container>  
            </Section>
        )
    }
}