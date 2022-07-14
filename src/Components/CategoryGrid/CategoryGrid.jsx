import React from "react";
import StyledCategoryContainer from "./StyledCategoryGrid";
import CategoryCard from "./CategoryCard/CategoryCard";
import { useCategories } from "../../utils/hooks/useCategories";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
    const {data, isLoading} = useCategories();

    // console.log(data.results);

    return(
        !isLoading ? 
        <StyledCategoryContainer>
            <h2>Explore our main categories</h2>
            <div className="categories-grid">
            {data.results.map(
                (cat)=> <Link to="/products" ><CategoryCard key={cat.id} name={cat.data.name}/></Link>
            )}
            </div>
        </StyledCategoryContainer>
        :
        <p>Nothing yet</p>
    );
}

export default CategoryGrid;