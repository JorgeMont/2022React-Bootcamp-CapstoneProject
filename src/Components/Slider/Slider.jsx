import React, {useState, useEffect} from 'react';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import SliderButton from './SliderButton/SliderButton';
import SliderContainer from './SliderStyled';

const Slider = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState();
    const [currentImageUrl, setCurrrentImageUrl] = useState('');
    const [currentImageAlt, setCurrentImageAlt] = useState('An image');   
    const {data, isLoading} = useFeaturedBanners();


    useEffect(
        ()=>{
            if(!isLoading){
                const bannersArray = [...data.results];
                //No se mueve porque debe triggereas a banneridx para que los demas se actualicen
                //Refactor para que pueda detectar un cambio
                // setCurrentBannerIndex();
                setCurrrentImageUrl(bannersArray[currentBannerIndex].data.main_image.url);
                setCurrentImageAlt(bannersArray[currentBannerIndex].data.main_image.alt);
            }
            else{
                console.log('aun no carga');
            }
        }
        ,[currentImageUrl, currentImageAlt, currentBannerIndex]);

    const nextBanner = () => {
        if(currentBannerIndex < data.results.length - 1){
            setCurrentBannerIndex(currentBannerIndex + 1);
        }
        else{
            setCurrentBannerIndex(0);
        }
    }

    const prevBanner = () => {
        if(currentBannerIndex > 0){
            setCurrentBannerIndex(currentBannerIndex - 1);
        }
        else{
            setCurrentBannerIndex(data.results.length - 1);
        }
    }

    return (
        !isLoading ? 
        <SliderContainer>
            <div className="imageContainer">
                <img src={currentImageUrl} alt={currentImageAlt} />
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
        : 
        <p>Loading Slider</p>
    )
}

export default Slider;