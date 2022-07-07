import React, {useState} from 'react';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import SliderButton from './SliderButton/SliderButton';
import BannerSliderContainer from './BannerSlider.styles';

const BannerSlider = () => {
    const {data, isLoading} = useFeaturedBanners();
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

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
        <BannerSliderContainer>
            <div className="imageContainer">
                <img 
                src={data.results[currentBannerIndex].data.main_image.url} 
                alt={data.results[currentBannerIndex].data.main_image.alt} 
                />
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
        </BannerSliderContainer>
        :
        <p>Loading...</p>
    );
}

export default BannerSlider;