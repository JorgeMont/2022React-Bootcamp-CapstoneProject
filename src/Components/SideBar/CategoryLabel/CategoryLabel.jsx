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

const CategoryLabel = ({catName, selectedCatList, addSelectedCat}) => {
    const [isSelected, setIsSelected] = useState('white');

    const handleClick = (color) => {
        if(isSelected === "white"){
            setIsSelected('#eaeded');
        }
        else{
            setIsSelected('white');
        }

        if(selectedCatList.includes(catName)){
            addSelectedCat([...selectedCatList.filter(el=>el !== catName)]);
        }
        else{
            addSelectedCat([...selectedCatList, catName]);
        }
    }
    return(
        <CategoryLabelStyled 
        color={isSelected}
        onClick={handleClick}
        
        >
            {catName}
        </CategoryLabelStyled>
    );
}

export default CategoryLabel;