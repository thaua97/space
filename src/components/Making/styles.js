import styled from 'styled-components'

const Container = styled.div`
  padding: 90px;
  margin: 90px;

  @media screen and (max-width: 400px) {
    padding: 30px;
    margin: 30px; 
  }
`
const Section = styled.div`
  height: 100%;
  width: 100%;
  background-color: #9097fd;
`
const Box = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: space-between;

  @media screen and (max-width: 400px) {
    flex-flow: column;
    justify-content: center
    align-items: center;
  }
`
const Text = styled.h1`
  color: #F9FAF5;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
`

const Card = styled.div`
  width: 30%;
  margin: 0 10px 0 10px;
  background-color: #F9FAF5;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 25px;
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media screen and (max-width: 400px) {
    width: 50%;
    padding-bottom: 40px;
    flex-flow: column;
    justify-content: center
    align-items: center;
  }
` 
const CardImage = styled.img`
  width: 50%;
  margin: 25%;
`

const CardContent = styled.div`
  padding: 10%;
  margin-top: -100px;
`

const CardTitle = styled.h2`
  color: #9097fd;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  padding-bottom: 20px;
  text-align: center;
`

const CardText = styled.p`
  color: #9097fd;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  text-align: center;
`

export { Container, Section, Box, Text, Card, CardImage, CardContent, CardTitle, CardText }