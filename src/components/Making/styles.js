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
  margin: 0;
  padding: 0;
  background-color: #9097fd;
`

export { Container, Section }