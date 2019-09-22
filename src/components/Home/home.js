import styled from 'styled-components'  

export const HomeComponent = styled.div`
    width: 100%;
    min-height: 62vh;
    overflow: hidden;
    position: relative;
    background-image: url('images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
`
export const Title = styled.h1`
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%,-66%);
    color: #5f5f5f;
    text-transform: uppercase;
    font-size: 40px;
`
export const Title2 = styled.h2`
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%,-66%);
    color: #eb440e;
    text-transform: uppercase;
    font-size: 30px;
`
export const Desc = styled.h6`
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%,-66%);
    color: #617c8c;
    text-align: center;
    line-height: 2;
`
export const Span = styled.span`
    font-weight: bolder;
    color: #000;
    font-size: 12px;
`
export const Btn = styled.button`
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%,-50%);
    color: #FFF;
    background-color: #eb5424;
    font-size: 15px;
    padding: 15px 30px 15px 30px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.7s ease;
    -webkit-transition: all 0.6s ease;
    outline: none;
    &:hover{
        background-color: #000;
        color: #eb5424;
        
        font-size: 17px;
        
    }
`