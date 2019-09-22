import React, {Fragment} from 'react';
import {ContactComponent, Title, Span, Name, Message, Subject, Email, Btn} from './contact';
import Footer from '../Footer'

const Contact = () =>{
    return(
        <Fragment>
            <ContactComponent>
                <div className="contain">
                    <form>
                    <Title><Span>Drop </Span>me a line</Title>
                    <Name type="text" placeholder="  Your Name" /> <Email name="email" type="email" placeholder="  Your Email" />
                    <Subject type="text" placeholder="  Your Subject"/>
                    <Message type="text" placeholder=" Your Message" rows="7"/>
                    <Btn type="submit" value="SHOOT MESSAGE" />
                    </form>
                </div>
            </ContactComponent>
            <Footer name="home" />
        </Fragment>
    )
}
export default Contact;