import styled from 'styled-components';

const StyledFooterContainer = styled.footer`
    background-color: #232f3e;
    color: #d7d5d8;
    flex: 0 0 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .footerText{
        padding: 0 2rem;
    }

    @media(max-width: 485px){
        .footerText{
            font-size: 0.6rem;
        }
    }
`;

export default StyledFooterContainer;