import React from 'react';
import styled from 'styled-components';

const ProductListStyled = styled.div`
    flex: 1 0 auto;
`;

const ProductList =  ({pageHandler}) => {
    return(
        <ProductListStyled>
            <h1>This is the Product List Page</h1>
            <button onClick={()=>{pageHandler(true)}}>Go to Homepage</button>
        </ProductListStyled>
    );
}

export default ProductList;