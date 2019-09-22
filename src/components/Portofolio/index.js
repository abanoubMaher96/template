import React ,{useState ,useEffect} from 'react';
import {PortfolioComponent, Title, Span, SubTitle, Head, Image, ImageContainer, Overlay, OverlayBody, OverlayTitle} from './portofolio'
import axios from 'axios'

const Portofolio = () =>{
    // using hooks
    const [ images, setImages] = useState([])

    useEffect( () =>{
        axios.get('js/data.json').then( res =>{ setImages(res.data.portfolio) })
    } ,[] )

    const allimages = images.map( (i) =>{
        return(
            <ImageContainer key={i.id} >
                <Image src={i.image} alt={i.id} />
                <Overlay>
                    <OverlayBody><OverlayTitle>web developer</OverlayTitle>Occaecat veniam eiusmod reprehenderit nisi occaecat eiusmod consequat consectetur labore sunt.</OverlayBody>
                </Overlay>
            </ImageContainer>
        )
    } )
    return(
        <PortfolioComponent id="portfolio">
            <div className="contain">
                <Title><Span>my</Span> portfolio</Title>
                <Head>
                    <SubTitle pad>all</SubTitle>
                    <SubTitle>HTML</SubTitle>
                    <SubTitle>photoshop</SubTitle>
                    <SubTitle>wordpress</SubTitle>
                    <SubTitle>mobile</SubTitle>
                </Head>
            </div>
            {allimages}
        </PortfolioComponent>
       
    )
}
export default Portofolio;