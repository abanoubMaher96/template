import React ,{Fragment, Component} from 'react';

import Home from '../Home'
import About from '../About'
import Work from '../Work'
import SocialMedia from '../SocialMedia'
import Footer from '../Footer'
import Portofolio from '../Portofolio'
import Profile from '../Profile'

class Main extends Component{
  render(){
    return(
      <Fragment>
        <Home />
        <Work />
        <Portofolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
        
      </Fragment>
    )
  }
}

export default Main;
