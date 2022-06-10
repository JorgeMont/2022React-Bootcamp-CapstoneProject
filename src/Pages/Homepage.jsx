import styled from 'styled-components';

const HomepageContainer = styled.section`
    background-color: gray;
    flex: 1 0 auto;
`;

const Homepage = () => {
    return(
        <HomepageContainer>
            Hola soy un homepage verde
        </HomepageContainer>
    );
}

export default Homepage;