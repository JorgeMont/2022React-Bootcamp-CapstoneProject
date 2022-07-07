import React, {useState, useEffect} from 'react';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import SliderButton from './SliderButton/SliderButton';
import SliderContainer from './SliderStyled';

const Slider = () => {
    const {data, isLoading} = useFeaturedBanners();
    const [currentBannerIndex, setCurrentBanner] = useState(0);
    const [currentImageUrl, setCurrrentImageUrl] = useState('');
    const [currentImageAlt, setCurrentImageAlt] = useState('An image');   

    useEffect(
        ()=>{
            if(!isLoading){
                const bannersArray = [...data.results];
                setCurrrentImageUrl(bannersArray[currentBannerIndex].data.main_image.url);
                setCurrentImageAlt(bannersArray[currentBannerIndex].data.main_image.alt);
                console.log(data, isLoading);
            }
        }
        ,[currentImageUrl, currentBannerIndex]);

    const nextBanner = () => {
        if(currentBannerIndex < data.results.length - 1){
            setCurrentBanner(currentBannerIndex + 1);
        }
        else{
            setCurrentBanner(0);
        }
    }

    const prevBanner = () => {
        if(currentBannerIndex > 0){
            setCurrentBanner(currentBannerIndex - 1);
        }
        else{
            setCurrentBanner(data.results.length - 1);
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