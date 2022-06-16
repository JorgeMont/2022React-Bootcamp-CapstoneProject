import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Homepage from './Homepage';
import styled from 'styled-components';

const ShopContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 2147483650;
`;

const Shop = () => {

    return(
    <ShopContainer>
        <Header />
        <Homepage />
        <Footer />
    </ShopContainer>
    );
}

export default Shop;