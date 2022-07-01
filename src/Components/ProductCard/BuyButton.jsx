import React from 'react';
import styled from "styled-components";

const BuyButtonStyled = styled.div`
    background-color: #27c9a4;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    color: white;
    margin-right: 1rem;

    &:hover{
        cursor: pointer;
    }
`;

const BuyButton = ({text}) => {
    return(
        <BuyButtonStyled>
            {text}
        </BuyButtonStyled>
    )
}

export default BuyButton;