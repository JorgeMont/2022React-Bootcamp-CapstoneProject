import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const PageNumberStyled = styled.div`
    width: 2rem;
    height: 100%;
    background-color: ${(props)=>props.pageColor};
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
    const [isCurrent, setIsCurrent] = useState('#f0f0f0');

    useEffect(
        ()=>{
            if(isCurrentPage){
                setIsCurrent('#79acfb')
            }
            else{
                setIsCurrent('#f0f0f0')
            }
        }
        ,[]);

    return(
        <PageNumberStyled pageColor={isCurrent}>
            {number}
        </PageNumberStyled>
    )
}

export default PageNumber;