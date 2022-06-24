import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import productsList from '../../utils/mocks/en-us/products.json';
import styled from 'styled-components';

const ProductsGridStyled = styled.section`
    background-color: blue;
    flex: 1 0 auto;

`;

const ProductsGrid = () => {
    const [products, setProducts] = useState();

    useEffect(
        ()=>{
            setProducts([...productsList.results])
        }
        ,[]);
    return(
        products ? 
        <ProductsGridStyled>
            <ProductCard />
        </ProductsGridStyled>
        : 
        <p>Loading products...</p>
    );
}

export default ProductsGrid;