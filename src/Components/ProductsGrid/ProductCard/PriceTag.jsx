import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const PriceTagStyled =  styled.div`
    font-size: 1.8rem;
    margin: 0.5rem;
`;

const PriceTag = ({price}) => {
    const [myPrice, setMyPrice] = useState(price.toString())

    const formatPrice = (p) => {
        let asArray = p.split('');
        asArray.splice(p.length-6, 0, ',');
        return asArray.join('');
    }

    useEffect(()=>{
        if(myPrice.length >= 7){
            setMyPrice(formatPrice(myPrice));
        }
    },[])

    return(
        <PriceTagStyled>
            <p>${myPrice}</p>
        </PriceTagStyled>
    )
}

export default PriceTag;