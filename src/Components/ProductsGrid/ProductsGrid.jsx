import {useEffect, useState} from 'react';
import Productslist from '../../utils/mocks/en-us/featured-products.json';
import ProductCard from './ProductCard/ProductCard';
import ProductGridContainer from './ProductsGridStyled';

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