import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CategoryLabelStyled = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: ${(props) => props.color};

    &:hover{
        cursor: pointer;
        background-color: #eaeded;

    }
`;

const CategoryLabel = ({ cat, selectedCatList, addSelectedCat }) => {
    const [isSelectedColor, setIsSelectedColor] = useState();

    const handleClick = (color) => {
        if(isSelectedColor === "white"){
            setIsSelectedColor('#eaeded');
        }
        else{
            setIsSelectedColor('white');
        }

        if(selectedCatList.includes(cat.id)){
            addSelectedCat([...selectedCatList.filter(el => el !== cat.id)]);
        }
        else{
            addSelectedCat([...selectedCatList, cat.id]);
        }
    }

    useEffect(() => {
        selectedCatList.includes(cat.id) ? setIsSelectedColor('#eaeded') : setIsSelectedColor('white');
    }, []);


    return (
        <CategoryLabelStyled
            color={isSelectedColor}
            onClick={handleClick}

        >
            {cat.name}
        </CategoryLabelStyled>
    );
}

export default CategoryLabel;