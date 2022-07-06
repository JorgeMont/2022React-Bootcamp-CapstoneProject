import React, {useState} from 'react';
import styled from 'styled-components';
import ProductsGrid from '../Components/ProductsGrid/ProductsGrid';
import SideBar from '../Components/SideBar/SideBar';

const ProductListStyled = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
`;

const ProductList =  () => {
    const [selectedCat, setSelectedCat] = useState([]);
    
    return(
        <ProductListStyled>
            <SideBar selectedCatList={selectedCat} addSelectedCat={setSelectedCat} />
            <ProductsGrid selectedCats={selectedCat}/>
        </ProductListStyled>
    );
}

export default ProductList;