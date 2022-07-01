import styled from "styled-components";

const HeaderContainer = styled.header`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgba(62,62,62,255);
        color: white;
        padding: 0.5rem 0;
        margin: 0;
        flex: 0 0 auto;
        align-items: center;
        flex-wrap: wrap;

        @media(max-width: 600px){
            .searchBarContainer{
                order: 3;
                margin: 0 auto;
            }
        }
    `;

export default HeaderContainer;