import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const HeaderLogoStyled = styled.div`
    padding: 0 1.5rem;
    img{
        width: 4rem;
        &:hover{
            cursor: pointer;
        }
    }
`;

const HeaderLogo = ({srcLogo}) =>{
    return(
        <Link to="/">
        <HeaderLogoStyled>
            <img src={srcLogo} alt="company logo" />
        </HeaderLogoStyled>
        </Link>
    );
}

export default HeaderLogo;