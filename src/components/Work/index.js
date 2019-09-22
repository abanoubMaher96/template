import React, {Component}  from 'react';
import {WorkComponent, MyWork, Span, Works, WorkDesc, Title, Icon} from './work';
import axios from 'axios'

class work extends Component {
    state ={
        works: []
    }

    componentDidMount(){
        axios.get('js/data.json').then(res => {this.setState({works: res.data.works})})
    }

   render(){
       const {works} = this.state;
        const worksList = works.map((i) => {
            return(
                <Works first={i.key} key={i.id}>
                    <Icon className={i.icon_name}></Icon>
                    <Title>{i.title}</Title>
                    <WorkDesc>
                        {i.body}
                    </WorkDesc>
                </Works>
            )
        })
    return(
        <WorkComponent id="myWork" >
            <div className="contain">
                <MyWork>
                    <Span>My</Span> Work
                </MyWork>
                {worksList}
            </div>
        </WorkComponent>
    )
   }
}
export default work;