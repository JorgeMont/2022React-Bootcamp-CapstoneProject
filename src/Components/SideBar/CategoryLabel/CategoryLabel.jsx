import React from 'react';
import styled from 'styled-components';

const CategoryLabelStyled = styled.div`
    width: 100%;
    padding: 1rem;

    &:hover{
        cursor: pointer;
        background-color: #eaeded;
    }
`;

const CategoryLabel = ({catName}) => {
    return(
        <CategoryLabelStyled onClick={()=>{console.log('aaa')}}>
            {catName}
        </CategoryLabelStyled>
    );
}

export default CategoryLabel;