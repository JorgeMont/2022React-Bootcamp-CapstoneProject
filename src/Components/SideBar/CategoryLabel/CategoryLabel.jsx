import React, {useState} from 'react';
import styled from 'styled-components';

const CategoryLabelStyled = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: ${(props)=>props.color};

    &:hover{
        cursor: pointer;
        background-color: #eaeded;

    }
`;

const CategoryLabel = ({catName}) => {
    const [isSelected, setIsSelected] = useState('white');

    const changeSelectedColor = (color) => {
        if(isSelected === "white"){
            setIsSelected('#eaeded');
        }
        else{
            setIsSelected('white');
        }
    }
    return(
        <CategoryLabelStyled 
        color={isSelected}
        onClick={changeSelectedColor}
        
        >
            {catName}
        </CategoryLabelStyled>
    );
}

export default CategoryLabel;