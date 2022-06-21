import styled from 'styled-components';

const ProductGridContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    h2{
        padding: 1rem 0;
        text-align: center;
    }

    .products-grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;

export default ProductGridContainer;