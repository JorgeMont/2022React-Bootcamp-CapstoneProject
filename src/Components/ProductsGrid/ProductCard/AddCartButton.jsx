import styled from "styled-components";

const AddCartButtonStyled = styled.div`
    background-color: #fab330;
    color: white;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }    
`;

const AddCartButton = () => {
    return(
        <AddCartButtonStyled>
            <i className="fa-solid fa-cart-plus" />
        </AddCartButtonStyled>
    )
}

export default AddCartButton;