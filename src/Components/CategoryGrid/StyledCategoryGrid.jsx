import styled from "styled-components";

const StyledCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #eaeded;
    padding: 2rem 0;

    a{
        text-decoration: none;
        color: black;
    }

    h2{
        padding: 1rem 0;
    }
    .categories-grid{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
    }

`;

export default StyledCategoryContainer;