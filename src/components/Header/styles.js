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
    margin-left: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    justify-items: left;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 10%;
        margin-left: 0;
        padding: 0 10% 0 10%;
    }
`

const Content = styled.div`
    padding: 0 90px 0 90px;
    margin: 0 25% 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: left;

    @media screen and (max-width: 600px) {
        padding: 5px 0 0 0;
        margin: 0;
    }
`

const Container = styled.div`
    padding: 20px 40px 0 40px ;

    .tine {
        padding: 10px;
        text-align: left;

        @media screen and (max-width: 600px) {
            padding: 5px 0 0 0;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 5px 0 0 0;
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

    @media screen and (max-width: 600px) {
        font-size: 3rem;
        letter-spacing: 4px;
    }
`
const Text = styled.p`
    color: #C4C7CE;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;;
    font-weight: 600;

    @media screen and (max-width: 600px) {
        visibility: hidden;
    }

`
const Image = styled.img`
    width: 255px;
    height: 525px;
    margin: 0 -200px 0 200px;
    border-radius: 25px;
    box-shadow: 0 8px 16px 0px rgba(0,0,0, 0.5);

    @media screen and (max-width: 600px){
        visibility: hidden;
        display: none;
        margin: 0 0 0 0;
    }
`;

const Button = styled.button`
    height: 55px;
    width: 245px;
    margin-top: 20%;
    justify-content: center;
    border-radius: 35px;
    border-color: transparent;
    box-shadow: 0 4px 8px 2px rgba(0,0,0, 0.2);
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    color: #a0a6ff;
    cursor: pointer;
    transition: 0.3s;

    :hover {
        height: 57px;
        width: 248px;
        box-shadow: 0 8px 16px 4px rgba(0,0,0, 0.2);
    }

    @media screen and (max-width: 600px) {
        height: 75px;
        width: 100%;
        transition: 0.2s;

        :hover {
            height: 75px;
            width: 100%;
            box-shadow: 0 8px 16px 4px rgba(0,0,0, 0.2);
        }
    }
    
` 

export { Container, Header, Box, Content, Image, Toolbar, ToolbarItem, Title, Text, Button }