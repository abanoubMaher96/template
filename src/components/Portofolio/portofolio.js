import styled from 'styled-components'

export const PortfolioComponent = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #f8f8f8;
    overflow: hidden
`
export const Title = styled.h2`
    margin: 0 0 0 50%;
    padding: 2% 0 3% 0;
    transform: translate(-22%,0%);
    text-transform: uppercase
    
`
export const Span = styled.span`
    font-weight: 100
`
export const Head = styled.div`
    margin-left: 27.5%
`
export const SubTitle = styled.h5`
    text-transform: capitalize;
    display: inline-block;
    margin-right: 5%;
    padding: ${props =>( props.pad ? '1% 2%' : '0' ) };
    background-color: ${props =>( props.pad ? '#eb5424' : '0' ) };
    color: ${props =>( props.pad ? '#FFF' : '#c1c1c1' )}
`
export const ImageContainer = styled.div`
    width: 25%;
    float: left;
    position: relative;
    
    &:hover > div {
        opacity: 1;
    }
`
export const Image = styled.img`
    width: 100%;
    float: left;
`
export const Overlay = styled.div`
    background-color: rgba(235,84,36 , 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity:0;
    transition: 0.4s
`
export const OverlayBody = styled.div`
    width: 70%;
    margin: auto;
    color: #c1c1c1;
    line-height: 1.5;
    margin-top: 15%;
    text-align: center;
    font-size: 15px;
   
`
export const OverlayTitle = styled.h3`
    margin-bottom: 4%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
`