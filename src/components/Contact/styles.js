import styled from 'styled-components'

const Container = styled.div`
    padding: 120px;
    margin: 120px;
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const Footer = styled.footer`
    width: 100%;
    height: 100%;
    background-color: #494949;
    font-family: 'Roboto', sans-serif;

`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const ListTitle = styled.li`
    padding: 10px;
    font-size: 2.3rem;
    font-weight: 300;
    color: #9097fd;
`

const ListItem = styled.a`
    padding: 10px;
    font-size: 1rem;
    text-decoration: none;
    color: #9097fd;
`

export { Container, Box, Footer, List, ListTitle, ListItem  }