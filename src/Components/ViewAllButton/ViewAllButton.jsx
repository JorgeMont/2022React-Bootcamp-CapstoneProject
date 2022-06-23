import React from 'react';
import styled from 'styled-components';

const ViewAllStyled = styled.div`
    width: 100%;
    margin: 1rem 0;

    .showBtn{
        height: 2.5rem;
        width: 12rem;
        background-color: #288cff;
        color: white;
        border-radius: 15px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            cursor: pointer;
            font-size: 1.1rem;
        }
    }
`;

const ViewAllButton = ({pageHandler}) => {
    return(
        <ViewAllStyled>
            <div className='showBtn' onClick={()=>{pageHandler(false)}}>Show All Products</div>
        </ViewAllStyled>
    );
}

export default ViewAllButton;