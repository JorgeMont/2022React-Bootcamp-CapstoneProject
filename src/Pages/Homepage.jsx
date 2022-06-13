import styled from 'styled-components';
import Categories from '../Components/Categories';
import Slider from '../Components/Slider';

const HomepageContainer = styled.section`
    background-color: gray;
    flex: 1 0 auto;
`;

const Homepage = () => {
    return(
        <HomepageContainer>
            <Slider />
            <Categories />
        </HomepageContainer>
    );
}

export default Homepage;