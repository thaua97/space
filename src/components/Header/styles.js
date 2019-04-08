import styled from 'styled-components'

const Header = styled.div`
    height: 600px;
    width: 100%;
    margin-bottom: -100px;
    background-color: #000000;
    background-image: linear-gradient(45deg, #9097fd 0%, #9097fd 100% );
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    padding: 20px 40px 0 40px ;
`
const Logo = styled.img`
    height: 100%;
    width: 230px;
    margin-left: 10%;
    justify-content: center;
    align-content: center;
    align-items: center;
`
const Content = styled.p`
    color: #F9FAF5;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`

export { Container, Header, Logo, Content }