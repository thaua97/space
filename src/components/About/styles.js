import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 20px 0 20px;
  margin: 90px 90px 0 90px;

  @media screen and (max-width: 400px) {
    padding: 30px;
    margin: 30px; 
  }
`
const Section = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F9FAF5;
`
const Title = styled.h1`
  color: #9097fd;
  font-family: 'Roboto', sans-serif;
  font-size: 2.8rem;
  font-weight: 400;
`
const Text = styled.p`
  padding-top: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #C4C7CE;
`

const Content = styled.div`
  padding: 0px 10px 0 10px;
  margin: 0px 10px 0 10px;
`
const Box = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: space-between;
  align-items: center;

  @media screen and (max-width: 400px) {
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
  box-shadow: 0px 10px 40px 2px #00000034;
  border-radius: 10px;
`

export { Container, Section , Title, Text, Content, Box, Image }