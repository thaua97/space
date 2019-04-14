import React, { Component }  from 'react'
import { Section, Container, Title, Text, Content, Box, Image } from './styles'

import { MdFlightTakeoff, MdAccountBalance } from 'react-icons/md'

export default class First extends Component {
    render () {
        return (
            <Section>
                <Container>
                   <Box>
                        <Content className="left">
                            <Title>
                                <MdFlightTakeoff size={64}/> Organize a sua viagem
                            </Title>
                            <Text>O app possuiu um alerta para a preparar sua viagem em tempo habil</Text>
                            <Title>
                               <MdAccountBalance /> Sobre o App
                            </Title>
                            <Text>O Space Trevel é um app para organização pessoal da sua viagem</Text>
                        </Content>
                        <Content>
                            <Image src={require('../../images/app.png')} />
                        </Content> 
                        <Content className="right">
                            <Title>Sobre o App</Title>
                            <Text>Este app esta sendo desenvolvido para a cadeira de Projeto e Desenvolvimento, no curso de Análise e desenvolvimento de Sistemas da FATEC Pelotas. </Text>
                            <Title>Sobre o App</Title>
                            <Text>O Space Trevel é um app para organização pessoal da sua viagem</Text>
                        </Content>  
                   </Box>
                </Container>  
            </Section>
        )
    }
}