import styled from 'styled-components';
import CategoryGrid from '../Components/CategoryGrid';
import ProductGrid from '../Components/ProductsGrid';
import Slider from '../Components/Slider';

const HomepageContainer = styled.section`
    background-color: #eaeded;
    flex: 1 0 auto;
`;

const Homepage = () => {
    return(
        <HomepageContainer>
            <Slider />
            <CategoryGrid />
            <ProductGrid />
        </HomepageContainer>
    );
}

export default Homepage;