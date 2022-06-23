import React from 'react';
import styled from "styled-components";

const CartStyled = styled.div`
    padding: 0 2rem;
    i{
        font-size: 1.5rem;
    }

    &:hover{
        cursor: pointer;
    }
`;

const ShoppingCart = () => {
    return(
        <CartStyled>
            <i className="fa-solid fa-cart-shopping" />
        </CartStyled>
    );
}

export default ShoppingCart;