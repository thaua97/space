import React, { Component } from 'react'
import { 
    Header, 
    Container, 
    Box, 
    Content, 
    Title, 
    Text, 
    Image, 
    Toolbar, 
    ToolbarItem, 
    Button 
} from './styles'

export default class First extends Component {
    render () {
        return (
            <Header>
                <Toolbar>
                    <ToolbarItem href="https://gitlab.com/thaua97">Gitlab</ToolbarItem>
                    <ToolbarItem href="https://gitlab.com/thaua97">Wiki</ToolbarItem>
                </Toolbar>   
                <Container>
                    <Box>
                        <Container className="tine">
                            <Title>Tudo em nossa volta<br/>
                            é espaço!</Title>
                            <Text>então toda viagem que fazemos é uma viagem espacial. O Space Travel é um app que visa auxiliar o usuário em sua viagem "espacial".</Text>
                            <Button>Gitlab do projeto</Button>
                        </Container>
                        <Content>
                            <Image src={require('../../images/trip.png')}/>
                        </Content>
                    </Box>
                </Container>
            </Header>
        )
    }
}
