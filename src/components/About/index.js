import React from 'react';
import {AboutComponent, Title, SubTitle, Body, Desc, TitleSpan} from './about'

const About = () =>{
    return(
        <AboutComponent id="about">
            <div className="contain">
                <Body>
                    <Title><TitleSpan>this is</TitleSpan> me</Title>
                    <SubTitle><TitleSpan>creative</TitleSpan> developer</SubTitle>
                    <Desc>
                        Elit consequat dolor elit aute excepteur aliquip exercitation sint magna ut. Id pariatur voluptate in Lorem aliquip duis non anim sunt. Ad laborum esse ex occaecat. Do minim voluptate aliquip consequat qui id qui reprehenderit. Et est duis aliqua adipisicing.
                    </Desc>
                    <Desc second>
                        Elit consequat dolor elit aute excepteur aliquip exercitation sint magna ut. Do minim voluptate aliquip consequat qui id qui reprehenderit. Et est duis aliqua adipisicing.
                    </Desc>
                </Body>
            </div>
        </AboutComponent>
    )
}

export default About;