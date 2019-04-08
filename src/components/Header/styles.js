import styled from 'styled-components'

const Header = styled.div`
    height: 700px;
    width: 100%;
    margin-bottom: -100px;
    background-color: #000000;
    background-image: linear-gradient(45deg, #9097fd 0%, #9097fd 100% );
    background-repeat: no-repeat;
    background-position: center;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10%;
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
const Toolbar = styled.nav`
    list-style: none;
    margin: 0;
    background: #9097fd;
    display: flex !important;
    justify-content: flex-end;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
`
const ToolbarItem = styled.a`
    text-decoration: none;
    cursor: pointer;
    display: block;
    padding: 1.5rem;
    color: #F9FAF5;
    transition: 0.3s;

    :hover {
        background-color: #a0a6ff;
    }

`

export { Container, Header, Box, Logo, Content, Toolbar, ToolbarItem }