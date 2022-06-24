import React from 'react';
import styled from "styled-components";

const PriceTagStyled =  styled.div`
    font-size: 1.8rem;
    margin: 0.5rem;
`;

const PriceTag = ({price}) => {

    const formatPrice = (p) => {
        if(p.length >= 7){
            let asArray = p.split('');
            asArray.splice(p.length-6, 0, ',');
            return asArray.join('');
        }
        else{
            return p;
        }
        
    }

    return(
        <PriceTagStyled>
            <p>${formatPrice(price.toString())}</p>
        </PriceTagStyled>
    )
}

export default PriceTag;