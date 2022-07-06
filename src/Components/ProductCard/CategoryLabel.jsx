import React from 'react';
import styled from "styled-components";

const CategoryLabelStyled = styled.div`
    border: 1px solid #c1c6c7;
    border-radius: 5px;
    display: inline-block;
    padding: 0;
    
    p{
        font-size: 0.8rem;
        text-align: left;
        padding: 2px;
        color: #2a8bfc;
        font-weight: 800;
    }
`;

const CategoryLabel = ({categoryName}) => {
    return (
        <CategoryLabelStyled>
            <p>{categoryName}</p>
        </CategoryLabelStyled>
    );
}

export default CategoryLabel;