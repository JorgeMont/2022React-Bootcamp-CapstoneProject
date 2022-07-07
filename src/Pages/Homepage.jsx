import React from 'react';
import styled from 'styled-components';
import BannerSlider from '../Components/BannerSlider/BannerSlider';
import CategoryGrid from '../Components/CategoryGrid/CategoryGrid';
import FeatProductsGrid from '../Components/FeatProductsGrid/FeatProductsGrid';
import ViewAllButton from '../Components/ViewAllButton/ViewAllButton';

const HomepageContainer = styled.section`
    background-color: #eaeded;
    flex: 1 0 auto;
`;

const Homepage = () => {
    return(
        <HomepageContainer>
            <BannerSlider />
            <CategoryGrid />
            <FeatProductsGrid />
            <ViewAllButton />
        </HomepageContainer>
    );
}

export default Homepage;