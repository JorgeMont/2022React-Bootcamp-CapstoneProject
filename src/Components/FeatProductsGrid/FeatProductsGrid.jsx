import React from 'react';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import ProductCard from '../ProductCard/ProductCard';
import ProductGridContainer from './ProductsGridStyled';

const FeatProductsGrid = () => {

    const {data, isLoading} = useFeaturedProducts();
        
    return(
        
        !isLoading ?
        <ProductGridContainer>
            <h2>Most popular Products</h2>
            <div className="products-grid">
                {data.results.map(
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

export default FeatProductsGrid;