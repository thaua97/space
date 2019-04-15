import React, { Component }  from 'react'

import { Section, Container, Title, Text, Content, Box, Image } from './styles'

import { GiBackpack, GiSoccerField } from "react-icons/gi";
import { MdPalette } from 'react-icons/md'
import { WiDaySnowWind } from "react-icons/wi";

export default class First extends Component {
    render () {
        return (
            <Section>
                <Container>
                   <Box>
                        <Content>
                            <Title>Organize sua mala &nbsp; <GiBackpack size="40"/></Title>
                            <Text>De acordo com a sua estadia e o clima do local, o sistema lhe apresente uma forma inteligente de arrumar a sua mala sem excesso.</Text>
                            <Title>Prefencias &nbsp;<MdPalette size="40"/></Title>
                            <Text>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</Text>
                        </Content>
                        <Image src={require('../../images/app.png')} />
                        <Content alignText="right">
                            <Title align="flex-end"><GiSoccerField size="40"/>&nbsp; Intinerario</Title>
                            <Text>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</Text>
                            <Title align="flex-end"><WiDaySnowWind size="50"/>&nbsp; Seja precavido</Title>
                            <Text>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</Text>
                        </Content>
                   </Box>
                </Container>  
            </Section>
        )
    }
}