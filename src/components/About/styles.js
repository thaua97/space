import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  margin: 90px;

  @media screen and (max-width: 600px) {
    padding: 8%;
    margin: 2%; 
  }
`
const Section = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: -9%;
  background-color: #F9FAF5;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 600px) {
    margin-bottom: -5%; 
  }
`
const Title = styled.h1`
  color: #9097fd;
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  font-weight: 200;
  display: flex;
  justify-content: ${props => props.align ||'flex-start' };
  align-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
  }
  
`
const Text = styled.p`
  padding: 5% 0 15% 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: #C4C7CE;
`

const Content = styled.div`
  padding: 0px 10px 0 10px;
  margin: 0px 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${props => props.alignText || 'left'};

  @media screen and (max-width: 600px) {
    text-align: left;
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
  top: -50px; 
  box-shadow: 0px 4px 8px 0px #00000034;
  border-radius: 25px;

  @media screen and (max-width: 600px) {
    visibility: hidden;
    display: none;
  }
`

export { Container, Section , Title, Text, Content, Box, Image }