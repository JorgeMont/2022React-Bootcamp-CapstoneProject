import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import productsList from '../../utils/mocks/en-us/products.json';
import styled from 'styled-components';
import Pagination from '../Pagination/Pagination';

const ProductsGridStyled = styled.section`
    flex: 3 0 60rem;
    background-color: white;
    display: flex;
    flex-direction: column;

    .productsContainer{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 1rem;
        flex: 1 0 auto;
    }
`;

const ProductsGrid = ({ selectedCats }) => {
    const [products, setProducts] = useState();

    useEffect(
        () => {
            setProducts([...productsList.results]);
        }
        , []);
    return (
        products ?
            <ProductsGridStyled>
                <div className="productsContainer">
                    {selectedCats.length === 0 ?
                        products.map(
                            (prod) =>
                                <ProductCard
                                    key={prod.id}
                                    imgUrl={prod.data.mainimage.url}
                                    altImg={prod.data.mainimage.alt}
                                    prodCategory={prod.data.category.slug}
                                    prodPrice={prod.data.price}
                                    prodName={prod.data.name}
                                />
                        )
                        :

                        products.filter(prod => selectedCats.includes(prod.data.category.id)).map(
                            prod =>
                                <ProductCard
                                    key={prod.id}
                                    imgUrl={prod.data.mainimage.url}
                                    altImg={prod.data.mainimage.alt}
                                    prodCategory={prod.data.category.slug}
                                    prodPrice={prod.data.price}
                                    prodName={prod.data.name}
                                />
                        )


                    }
                </div>
                <Pagination />
            </ProductsGridStyled>
            :
            <p>Loading products...</p>
    );
}

export default ProductsGrid;