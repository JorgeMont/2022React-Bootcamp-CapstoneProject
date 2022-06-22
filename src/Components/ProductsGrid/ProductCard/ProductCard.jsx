import React from 'react';
import AddCartButton from './AddCartButton';
import BuyButton from './BuyButton';
import CategoryLabel from './CategoryLabel';
import PriceTag from './PriceTag';
import ProductCardStyled from './ProductCardStyled';

const ProductCard = ({imgUrl, altImg, prodCategory, prodPrice, prodName}) => {
    return(
    <ProductCardStyled>
        <div className="imageContainer">
            <img src={imgUrl} alt={altImg} />
        </div>
        <div className="prodInfo">
            <h1>{prodName}</h1>
            <CategoryLabel categoryName={prodCategory}/>
            <PriceTag price={prodPrice}/>
            <div className="botones">
                <BuyButton text={'Buy'}/>
                <AddCartButton />
            </div>
        </div>
    </ProductCardStyled>);
}

export default ProductCard;