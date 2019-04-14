import styled from 'styled-components'

const Container = styled.div`
    padding: 120px;
    margin: 120px;
    @media screen and (max-width: 600px) {
        padding: 5%;
        margin: 5%;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Footer = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #494949d9, #494949d9), url('https://images.pexels.com/photos/297642/pexels-photo-297642.jpeg?cs=srgb&dl=activity-adventure-blur-297642.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=1920&h=1322e-sky-1054218.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=1920&h=1280');
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Roboto', sans-serif;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 600px) {
        padding: 10%;    
        text-align: center;
    }
`
const ListTitle = styled.li`
    padding: 10px;
    font-size: 2.3rem;
    font-weight: 300;
    color: #9097fd;

    @media screen and (max-width: 600px) {
        padding: 10%;    
        text-align: center;
    }

`

const ListItem = styled.a`
    padding: 10px;
    font-size: 1rem;
    text-decoration: none;
    color: #9097fd;
`

export { Container, Box, Footer, List, ListTitle, ListItem  }