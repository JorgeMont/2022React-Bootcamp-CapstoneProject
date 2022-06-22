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
        <HeaderLogoStyled>
            <img src={srcLogo} alt="company logo" />
        </HeaderLogoStyled>
    );
}

export default HeaderLogo;