import React, {useState, useEffect} from 'react';
import {SocialComponent, SocialElement, Follow, SubFollow, SocialContainer, Icon, FoAndSo} from './social'
import axios from 'axios'

const SocialMedia = () =>{

    const [socialJson, setSocialJson] = useState([]) 

    useEffect(()=>{
        axios.get('js/data.json').then( res =>{setSocialJson(res.data.social)})
    },[])

    const allSocial = socialJson.map((i)=>{
        return(
            <SocialElement key={i.id} bcolor={i.id}>
                <SocialContainer>
                    <Icon className={i.icon}/>
                    <FoAndSo>
                        <Follow>{i.title}</Follow>
                        <SubFollow>{i.body}</SubFollow>
                    </FoAndSo>
                </SocialContainer>
            </SocialElement>
        )
    } )
    return(
        <SocialComponent>
            {allSocial}
        </SocialComponent>
    )
}
export default SocialMedia;