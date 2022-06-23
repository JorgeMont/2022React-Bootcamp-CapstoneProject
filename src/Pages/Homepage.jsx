import React from 'react';
import styled from 'styled-components';
import CategoryGrid from '../Components/CategoryGrid/CategoryGrid';
import ProductGrid from '../Components/ProductsGrid/ProductsGrid';
import Slider from '../Components/Slider/Slider';
import ViewAllButton from '../Components/ViewAllButton/ViewAllButton';

const HomepageContainer = styled.section`
    background-color: #eaeded;
    flex: 1 0 auto;
`;

const Homepage = ({changePage}) => {
    return(
        <HomepageContainer>
            <Slider />
            <CategoryGrid />
            <ProductGrid />
            <ViewAllButton pageHandler={changePage}/>
        </HomepageContainer>
    );
}

export default Homepage;