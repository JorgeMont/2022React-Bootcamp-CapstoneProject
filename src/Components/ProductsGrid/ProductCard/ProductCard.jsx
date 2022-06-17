import React from 'react';
import ProductCardStyled from './ProductCardStyled';

const ProductCard = ({imgUrl, altImg, prodCategory, prodPrice, prodName}) => {
    return(
    <ProductCardStyled>
        <div className="imageContainer">
            <img src={imgUrl} alt={altImg} />
        </div>
        <div className="prodInfo">
            <h1>{prodName}</h1>
            <div className="productTitle">
                <h2>{prodCategory}</h2>
            </div>
            <p className="priceTag">${prodPrice}</p>
            <div className="botones">
                <div className="buyButton">
                    Buy
                </div>
                <div className="addCartButton">
                    <i className="fa-solid fa-cart-plus" />
                </div>
            </div>
        </div>
    </ProductCardStyled>);
}

export default ProductCard;