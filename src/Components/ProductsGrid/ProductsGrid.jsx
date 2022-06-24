import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import productsList from '../../utils/mocks/en-us/products.json';
import styled from 'styled-components';

const ProductsGridStyled = styled.section`
    background-color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1rem;


`;

const ProductsGrid = () => {
    const [products, setProducts] = useState();

    useEffect(
        () => {
            setProducts([...productsList.results]);
        }
        , []);
    return (
        products ?
            <ProductsGridStyled>
                {products.map(
                    (prod) =>
                        <ProductCard
                            key={prod.id}
                            imgUrl={prod.data.mainimage.url}
                            altImg={prod.data.mainimage.alt}
                            prodCategory={prod.data.category.slug}
                            prodPrice={prod.data.price}
                            prodName={prod.data.name}
                        />
                )}
            </ProductsGridStyled>
            :
            <p>Loading products...</p>
    );
}

export default ProductsGrid;