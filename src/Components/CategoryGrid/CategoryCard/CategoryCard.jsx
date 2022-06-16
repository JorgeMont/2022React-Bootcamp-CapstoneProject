import StyledCategoryCardContainer from "./StyledCategoryCard";

const CategoryCard = ({name="the name"}) => {
    return(
        <StyledCategoryCardContainer>
            <p>{name}</p>
        </StyledCategoryCardContainer>
    );
}

export default CategoryCard;