import React from 'react';
import {HomeComponent, Title, Title2, Desc, Span, Btn} from './home'
import {Link} from 'react-scroll'

const Home = () =>{
    return(
        <HomeComponent>
            <div className="contain">
                <Title>
                    Abanoub Maher
                </Title>
                <Title2>
                    Developer
                </Title2>
                <Desc>
                    Iam a professional <Span>Front-End Developer </Span>creating modern and responsive websites. Let us working together. Thank You
                </Desc>
                <Link to= "profile" spy={true} smooth={true} offset={0} duration= {1000}>
                    <Btn>
                        Let's Begin
                    </Btn>
                </Link>
            </div>
        </HomeComponent>
    )
}
export default Home;