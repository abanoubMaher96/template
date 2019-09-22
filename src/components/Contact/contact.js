import styled from 'styled-components'

export const ContactComponent = styled.div`
    width: 80%;
    margin: auto;
    box-sizing: border-box;
`
export const Title = styled.h1`
    text-transform: uppercase;
    width: 34%;
    margin: auto;
    padding: 8% 0 5% 0;
`
export const Span = styled.span`
    font-weight: 100;
`
export const Name = styled.input`
    width: 48%;
    float: left;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid rgba(216,216,216,0.5);
    padding: 0.7% 1%;
    outline: none; 
    transition: 0.4s;
    box-sizing: border-box;
    &:focus{
        border-color: #eb5424;
        border-radius: 10px;
    }
`
export const Email = styled(Name)`
    width: 48%;
    float: right;
`
export const Subject = styled(Name)`
    width: 100%;
    margin-top: 1%;
`
export const Message = styled.textarea`
    width: 100%;
    margin-top: 1%;
    background-color: #ebebeb;
    font-size: 11px;
    border-radius: 4px;
    outline: none; 
    transition: 0.4s;
    border: 1px solid rgba(216,216,216,0.5);
    &:focus{
        border-color: #eb5424;
        border-radius: 10px;
    }
`
export const Btn = styled.input`
    width: 70%;
    border: 1px solid rgba(216,216,216,0.5);
    background-color: #FFF;
    margin: 1% 0 15% 15%;
    padding: 0.5% 0 0.5% 0;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.8s;
    color: #757575;
    &:hover{
        background-color: #eb5424;
        border-radius: 10px;
        color: #000
    };
`