import styled from 'styled-components'

export const WorkComponent = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`
export const MyWork = styled.h1`
    color: #151515;
    text-transform: uppercase;
    font-size: 45px;
    margin: 10% 0 5% 10%;
    font-family: "Times New Roman", Times, serif;
`
export const Span = styled.span`
    font-weight: 100;
    color: #303030;

`
export const Works = styled.div`
    width: 30%;
    border: 1px solid #adadad;
    float: left;
    box-sizing: border-box;
    margin-bottom: 6%;
    margin-left: ${props => (props.first === 1 ? '0' : '2%')}
`
export const Icon = styled.i`
    font-size: 40px;
    text-align: center;
    color: #888;
    margin: 20% 50% 5% 43%
`
export const Title = styled.h3`
    color: #eb440e;
    text-align: center;
    text-transform: uppercase
`
export const WorkDesc = styled.h5`
    color: #617c8c;
    text-align: center;
    line-height: 2;
    margin:20% 20% 20% 20%
`