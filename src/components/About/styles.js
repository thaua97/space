import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  margin: 90px;

  @media screen and (max-width: 600px) {
    padding: 30px;
    margin: 40px; 
  }
`
const Section = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: -90px;
  background-color: #F9FAF5;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`
const Title = styled.h1`
  margin-left: 10px;
  color: #9097fd;
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  font-weight: 200;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
    margin-top: 10%;
  }

`
const Text = styled.p`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #9097fd;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    padding: 10px 0 10px 0;
    margin: 10% 0 0 0;
  }
`

const Content = styled.div`
  padding: 0px 10px 0 10px;
  margin: 0px 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .right {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .left {
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
  }

  @media screen and (max-width: 600px) {
    padding: 5px;
    margin: 0 0 20px 0;
  }
`
const Box = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: space-around;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    align-items: center;
  }
`

const Image = styled.img`
  height: 100%;
  width: auto;
  box-shadow: 0px 4px 8px 2px #00000034;
  border-radius: 25px;

  @media screen and (max-width: 600px){
    visibility: hidden;
    display: none;
  }
`

export { Container, Section , Title, Text, Content, Box, Image }