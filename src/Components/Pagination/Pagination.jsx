import React from 'react';
import styled from 'styled-components';
import PageNumber from './Number/PageNumber';

const PaginationStyled = styled.div`
background-color: #f0f0f0;
height: 2.2rem;
padding: 0 1rem;
display: flex;
justify-content: center;
.pagesContainer{
    display: flex;
    height: 100%;
 }
`;

const Pagination = () => {
    return (
        <PaginationStyled>
            <div className="pagesContainer">
                <PageNumber number={1} isCurrentPage={true}/>
                <PageNumber number={2} isCurrentPage={false}/>
                <PageNumber number={3} isCurrentPage={false}/>
                <PageNumber number={4} isCurrentPage={false}/>
                <PageNumber number={5} isCurrentPage={false}/>
                <PageNumber number={6} isCurrentPage={false}/>
            </div>
        </PaginationStyled>
    );
}

export default Pagination;