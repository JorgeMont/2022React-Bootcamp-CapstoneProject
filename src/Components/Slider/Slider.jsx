import React, {useState, useEffect} from 'react';
import Banners from '../../utils/mocks/en-us/featured-banners.json';
import SliderButton from './SliderButton/SliderButton';
import SliderContainer from './SliderStyled';

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
                <SliderButton 
                handleClick={prevBanner} 
                icon={"fa-solid fa-chevron-left"}
                />
                <SliderButton  
                handleClick={nextBanner}
                icon={"fa-solid fa-chevron-right"}
                />
            </div>
        </SliderContainer>
    )
}

export default Slider;