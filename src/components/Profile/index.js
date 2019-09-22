import React from 'react';
import {ProfileComponent, Title, Span, PartLeft, PartRight, Category, Detail, Info, Desc, Skill, Prog} from './profile'

const Profile = () =>{
    return(
        <ProfileComponent id="profile">
            <div className="container">
                <PartLeft>
                    <Title><Span>my</Span> profile </Title>
                    <Category>
                        <Info>name</Info>
                        <Info>birthday</Info>
                        <Info>address</Info>
                        <Info>phone</Info>
                        <Info>email</Info>
                    </Category>
                    <Category second>
                        <Detail>Abanoub Maher</Detail>
                        <Detail>August 28, 1996</Detail>
                        <Detail>52 street 16 , tahreer city, imbaba</Detail>
                        <Detail>+20 121 214 0899</Detail>
                        <Detail col>AbanoubMaher2015@gamil.com</Detail>
                    </Category>
                </PartLeft>
                <PartRight>
                    <Title>Some <Span>skills</Span> </Title>
                    <Desc>Aute Lorem labore sunt nisi tempor pariatur ad pariatur culpa in.Laboris nostrud duis pariatur exercitation aliquip exercitation duis.</Desc>
                    <Skill>react</Skill>
                    <Prog value="80" max="100" ></Prog>
                    <Skill>html5</Skill>
                    <Prog value="70" max="100" ></Prog>
                    <Skill>css3</Skill>
                    <Prog value="60" max="100" ></Prog>
                </PartRight>
            </div>
        </ProfileComponent>
    )
}
export default Profile;