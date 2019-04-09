import styled from 'styled-components'

const Header = styled.div`
    height: 700px;
    width: 100%;
    margin-bottom: -100px;
    background-image: linear-gradient(45deg, #542896d9 10%, #9097fdd9 100%), url("https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?cs=srgb&dl=adult-airport-arrival-1008155.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=1920&h=1277");
    background-repeat: no-repeat;
    background-position: center;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    justify-items: left;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center ;
        align-items: center;
        text-align: center;
        margin-top: 10%;
    }
`

const Content = styled.div`
    padding: 0 90px 0 90px;
    margin: 0 25% 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: left;
`

const Container = styled.div`
    padding: 20px 40px 0 40px ;

    .tine {
        padding: 10px;
        text-align: left;
    }
`

const Toolbar = styled.nav`
    list-style: none;
    margin: 0;
    background: transparent;
    display: flex !important;
    justify-content: flex-end;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
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

const Title = styled.h1`
    padding-bottom: 30px;
    color: #F9FAF5;
    letter-spacing: 2px;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-align: left;
`
const Text = styled.p`
    color: #C4C7CE;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;;
    font-weight: 600;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    box-shadow: 0 8px 16px 0px rgba(0,0,0, 0.5);
`;

const Button = styled.button`

` 

export { Container, Header, Box, Content, Image, Toolbar, ToolbarItem, Title, Text, Button }