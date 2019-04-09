import styled from 'styled-components'

const Section = styled.div`
    height: 100%;
    width: 100%;
    background-color: #F9FAF5;
    background-position: center;
    background-repeat: no-repeat;
`
const Container = styled.div`
    padding: 90px;
    margin: 90px;
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
    }

`
const Image = styled.img`
    width: 50%;
    height: 100%;
    padding-right: 10px;
    margin-right: 10px;
`

const Timeline = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    ::after {
        content: '';
        position: absolute;
        width: 4px;
        background-color: #9097fd;
        top: 0;
        bottom: 0;
        left: 20px;
    }
`

const TimelineContainer = styled.div`
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    position: relative;
    background-color: inherit;
`

const TimelineContent = styled.div` 
    padding: 20px 30px;
    background-color: #F9FAF5;
    position: relative;
    border-radius: 6px;
`

const TimelineDate = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    color: #9097fd;
    padding-bottom: 20px;
`

const TimelineTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #9097fd;
    padding-bottom: 20px;
`
const TimelineText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #9097fd;
`

export { 
    Section, 
    Container,
    Box,
    Image,
    Timeline, 
    TimelineContainer, 
    TimelineContent, 
    TimelineDate,
    TimelineTitle, 
    TimelineText
}