import styled from "styled-components";

const CategoryCardContainer = styled.div`
    background-color: white;
    width: 15rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 15px;
    box-shadow: 10px 10px 15px -4px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 15px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 15px -4px rgba(0,0,0,0.75);
    border: 1px;
    

    &:hover{
        cursor: pointer;
    }
`;

const CategoryCard = ({name="the name"}) => {
    return(
        <CategoryCardContainer>
            <p>{name}</p>
        </CategoryCardContainer>
    );
}

export default CategoryCard;