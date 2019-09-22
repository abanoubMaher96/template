import styled from 'styled-components'

export const AboutComponent = styled.div`
    width: 100%;
    min-height: 100px;
    background-image: url('images/creative/about-bg.jpg');
    background-position: top;
    background-attachment: fixed;
    background-size: cover;
    overflow: hidden;
`
export const Body = styled.div`
    width: 47%;
    float: right;
    padding-top: 4%;
`
export const Title = styled.h2`
    color: #000;
    text-transform: uppercase;
`
export const SubTitle = styled.h1`
    color: #eb5424;
    text-transform: uppercase;
`
export const Desc = styled.p`
    color: #6f7083;
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: ${ props =>( props.second ? '7%' : '0' ) };
`
export const TitleSpan = styled.span`
    font-weight: 100
`