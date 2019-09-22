import React ,{Component} from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Main from './components/Main'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


class App extends Component{
  render(){
    return(
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route path="/Contact" component={Contact} />
        </BrowserRouter>
    )
  }
}

export default App;
