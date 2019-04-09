import React, { Component } from 'react'
import { 
    Section,
    Container,
    Box,
    Image,
    Timeline, 
    TimelineContainer, 
    TimelineContent, 
    TimelineText, 
    TimelineTitle,
    TimelineDate
} from './styles'

export default class Updates extends Component {

    

    render () {
        const infos = [
            {
                id: 1,
                title: 'Desenvolvimento Api',
                text: 'Lorem foccuk asoidjasdoija ajosdaosidj jasidojaoi',
                date: 'Abril'
            },
            {
                id: 2,
                title: 'Deploy Api',
                text: 'Lorem foccuk asoidjasdoija ajosdaosidj jasidojaoi',
                date: 'Maio'
            }
        ]
    
        const listItem = infos.map((item) => 
            <TimelineContainer key={item.id}>
                <TimelineContent>
                    <TimelineDate>{ item.date }</TimelineDate>
                    <TimelineTitle>{ item.title }</TimelineTitle>
                    <TimelineText>{ item.text }</TimelineText>
                </TimelineContent>
            </TimelineContainer>
        
        )

        return (
            <Section>
                <Container>
                    <Box>
                    </Box>
                    <Box>
                        <Image src={require('../../images/date.png')} />
                        <Timeline>
                            {listItem}
                        </Timeline>
                    </Box>
                </Container>
            </Section>
        )
    }
}