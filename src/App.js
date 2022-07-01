import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage';
import ProductList from './Pages/ProductList';
import styled from 'styled-components';
// import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

const ShopContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 2147483650;
`;

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);
  const [showHomepage, setShowHomepage] = useState(true);

  return (
    <ShopContainer>
        <Header pageHandler={setShowHomepage}/>
        {showHomepage ? <Homepage changePage={setShowHomepage}/> : <ProductList pageHandler={setShowHomepage} />}        
        <Footer />
    </ShopContainer>
  );
}

export default App;
