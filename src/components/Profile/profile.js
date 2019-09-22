import styled from 'styled-components'

export const ProfileComponent = styled.div`
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
` 
export const PartLeft = styled.div`
    width: 50%;
    float: left;
    box-sizing: border-box;

` 
export const Title = styled.h1`
    font-size: 42px;
    text-transform: uppercase;
` 
export const Span = styled.span`
    font-weight: 100;
` 
export const PartRight = styled.div`
    float: left;
    width: 50%;
    padding-left: 2%;
    box-sizing: border-box;

` 
export const Category = styled.div`
    width: ${props =>( props.second ? '60%' : 'auto' )};
    float: left;
    margin-left: ${props => (props.second ? '3%' : '0') };
`
export const Info = styled.h5`
    text-transform: capitalize;
    color: #4a454a;
`
export const Detail = styled.h5`
    font-weight: 100;
    margin-left: 3%;
    color: ${props => (props.col ? '#eb5424' : '#4a454a' )};
`
export const Desc = styled.p`
    color: #6f7083;
    font-size: 12px;
    padding-top: 4%;
    line-height: 2;
`
export const Skill = styled.span`
    display: inline-block;
    text-transform: uppercase;
    color: #4a454a;
    font-weight: bolder;
    font-size: 11px;
`
export const Prog = styled.progress`
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 3px;
    margin-bottom: 4%;
    &::-webkit-progress-bar{
        background-color: #EEE;
        border-radius: 3px;
    };
    &::-webkit-progress-value{
        background-color: #eb5424;
        border-radius: 3px;
    }

`