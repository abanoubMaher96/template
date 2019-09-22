import styled from 'styled-components'

export const NavbarSection = styled.div`
    width: 100%;
    overflow: hidden;
    height: 9vh;
`
export const Logo = styled.div`
    width:50%;
    float: left;
    padding-top: 0.8%;
`
export const LogoText = styled.div`
    font-size: 27px;
    font-weight: 600;
`
export const UlList = styled.ul`
    float: left;
    width: 50%;
    padding: 0;
    list-style: none;
    text-align: center;
`
export const Li = styled.li`
    display: inline-block;
    margin-right: 3%;
    color:#444;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
    &:hover{color:#ea4c23}
`