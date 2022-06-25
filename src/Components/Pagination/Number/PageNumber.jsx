import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const PageNumberStyled = styled.div`
    width: 2rem;
    height: 100%;
    background-color: #79acfb;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 0 0.2rem;

    &:hover{
        cursor: pointer;
    }
`;

const PageNumber = ({number, isCurrentPage}) => {
    const [isCurrent, setIsCurrent] = useState();

    useEffect(
        ()=>{
            setIsCurrent(isCurrentPage)
        }
        ,[]);

    return(
        <PageNumberStyled >
            {number}
        </PageNumberStyled>
    )
}

export default PageNumber;