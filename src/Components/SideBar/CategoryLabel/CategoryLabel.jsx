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

const CategoryLabel = ({cat, selectedCatList, addSelectedCat}) => {
    const [isSelected, setIsSelected] = useState('white');

    const handleClick = (color) => {
        if(isSelected === "white"){
            setIsSelected('#eaeded');
        }
        else{
            setIsSelected('white');
        }

        if(selectedCatList.includes(cat.id)){
            addSelectedCat([...selectedCatList.filter(el => el !== cat.id)]);
        }
        else{
            addSelectedCat([...selectedCatList, cat.id]);
        }
    }
    return(
        <CategoryLabelStyled 
        color={isSelected}
        onClick={handleClick}
        
        >
            {cat.name}
        </CategoryLabelStyled>
    );
}

export default CategoryLabel;