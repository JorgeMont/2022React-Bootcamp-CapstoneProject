import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Productslist from '../utils/mocks/en-us/featured-products.json';
import ProductCard from './ProductCard';

const ProductGridContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    h2{
        padding: 1rem 0;
        text-align: center;
    }

    .products-grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;

const ProductGrid = () => {

    const [productsArray, setProductsArray] = useState();

    useEffect(
        ()=>{
            setProductsArray([...Productslist.results]);
        }
        ,[])
    return(
        productsArray ?
        <ProductGridContainer>
            <h2>Most popular Products</h2>
            <div className="products-grid">
                {productsArray.map(
                    (prod)=> 
                    <ProductCard 
                    key={prod.id}
                    imgUrl={prod.data.mainimage.url}
                    altImg={prod.data.mainimage.alt}
                    prodCategory={prod.data.category.slug}
                    prodPrice={prod.data.price}
                    prodName={prod.data.name}
                    />)}
            </div>
        </ProductGridContainer>
        : 
        <p>Nothing yet</p>
    );
}

export default ProductGrid;