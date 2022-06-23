import React from 'react';
import SliderButtonStyled from "./SliderButtonStyled";

const SliderButton = ({ icon, handleClick }) => {
    return (
        <SliderButtonStyled onClick={handleClick}>
                <i className={icon} />
        </SliderButtonStyled>
    )
}

export default SliderButton;