import React  from 'react';
import {Link } from 'react-router-dom'
import {UlList, Logo, Li, NavbarSection, LogoText} from './navbar'
import { Link as Going } from "react-scroll";
const Navbar = () =>{
    return(
        <NavbarSection >
            <div className= "contain">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <Li><Link className="anchor" to="/">Home</Link></Li>
                    <Li> 
                        <Going to="myWork" spy={true} smooth={true} offset={70} duration= {700} >My Work</Going>
                    </Li>
                    <Li> 
                        <Going to="portfolio" spy={true} smooth={true} offset={-37} duration= {1000} >portfolio</Going>
                    </Li>
                    <Li> 
                        <Going to="profile" spy={true} smooth={true} offset={0} duration= {1200} >resume</Going>
                    </Li>
                    <Li> 
                        <Going to="about" spy={true} smooth={true} offset={15} duration= {1400} >about</Going>
                    </Li>
                    <Li><Link className="anchor" to="/Contact">Contact</Link></Li>
                </UlList>
                
            </div>
        </NavbarSection>
    )
}
export default Navbar;