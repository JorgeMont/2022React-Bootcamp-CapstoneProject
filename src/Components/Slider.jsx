import React, {useState, useEffect} from 'react';
import Banners from '../utils/mocks/en-us/featured-banners.json';
import styled from 'styled-components';

// .slideshow-container
const SliderContainer = styled.div`
    .imageContainer{
        width: 100%;
        height: 30rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;   
        }
    }

    .ButtonsContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        top: 30%;

        .ControlButton{
                background-color: white;
                padding: 2rem;
                border-radius: 50%;
                opacity: 0.4;
                margin: 0 1rem;

                &:hover{
                opacity: 1.0;
                cursor: pointer;
            }
            }
        
    }
    
`;

const Slider = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [currentImageUrl, setCurrrentImage] = useState('')

    useEffect(
        ()=>{
            const bannersArray = [...Banners.results];
            setCurrrentImage(bannersArray[currentBanner].data.main_image.url)
        }
        ,[currentImageUrl, currentBanner]);

    const nextBanner = () => {
        if(currentBanner < Banners.results.length - 1){
            setCurrentBanner(currentBanner + 1);
        }
        else{
            setCurrentBanner(0);
        }
    }

    const prevBanner = () => {
        if(currentBanner > 0){
            setCurrentBanner(currentBanner - 1);
        }
        else{
            setCurrentBanner(Banners.results.length - 1);
        }
    }

    return (
        <SliderContainer>
            <div className="imageContainer">
                <img src={currentImageUrl} alt="img" />
            </div>
            <div className="ButtonsContainer">
                <div className="ControlButton" onClick={()=>{prevBanner()}}>
                    <i className="fa-solid fa-chevron-left"/>
                </div>
                <div className="ControlButton" onClick={()=>{nextBanner()}}>
                    <i className="fa-solid fa-chevron-right"/>
                </div>
            </div>
        </SliderContainer>
    )
}

export default Slider;