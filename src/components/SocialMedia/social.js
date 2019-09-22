import styled from 'styled-components'

export const SocialComponent = styled.div`
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
`
export const SocialElement = styled.div`
    width:33.3%;
    float:left;
    height: 30vh;
    background-color: ${props =>( props.bcolor === 1 ? '#3b5998' : '#cc2127') };
    background-color: ${props => (props.bcolor === 2 ? '#498cbf' : '') };
    box-sizing: border-box;
`
export const SocialContainer = styled.div`
    width:80%;
    padding: 15% 0 10% 5%;
    overflow: hidden;
`
export const Icon = styled.span`
    background-color: #FFF;
    padding: 5%;
    float:left;
    color: #707070;
`
export const FoAndSo = styled.div`
    float:left;
    padding-left: 3%;
    overflow: hidden;
`
export const Follow = styled.h4`
    color: #FFF;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 0 5% 0;
    
`
export const SubFollow = styled.h3`
    color: #FFF;
    text-transform: uppercase;
    font-weight:100;
    font-size: 16px;
    margin: 0;
    padding-bottom: 30%
`