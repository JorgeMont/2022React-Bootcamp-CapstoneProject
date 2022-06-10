import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #232f3e;
    color: #d7d5d8;
    flex: 0 0 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        padding: 0 2rem;
    }
`;

const Footer = () => {
    return(
        <FooterContainer>
            
            <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
        </FooterContainer>
    );
}

export default Footer;