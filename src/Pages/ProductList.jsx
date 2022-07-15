import React, {useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';
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
    let {searchCat} = useParams();
    
    console.log(searchCat);
    return(
        <ProductListStyled>
            <SideBar selectedCatList={selectedCat} addSelectedCat={setSelectedCat} />
            <ProductsGrid selectedCats={selectedCat}/>
            <Outlet />
        </ProductListStyled>
    );
}

export default ProductList;