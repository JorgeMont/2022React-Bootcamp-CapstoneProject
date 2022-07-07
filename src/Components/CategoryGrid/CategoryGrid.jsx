import React, {useEffect, useState } from "react";
import StyledCategoryContainer from "./StyledCategoryGrid";
import CategoriesList from '../../utils/mocks/en-us/product-categories.json'
import CategoryCard from "./CategoryCard/CategoryCard";
import { useCategories } from "../../utils/hooks/useCategories";

const CategoryGrid = () => {
    const {data, isLoading} = useCategories();

    console.log(data.results);

    return(
        // categoriesArray ? 
        // <StyledCategoryContainer>
        //     <h2>Explore our main categories</h2>
        //     <div className="categories-grid">
        //     {categoriesArray.map(
        //         (cat)=><CategoryCard key={cat.id} name={cat.data.name}/>
        //     )}
        //     </div>
        // </StyledCategoryContainer>
        // :
        !isLoading ? 
        <StyledCategoryContainer>
            <h2>Explore our main categories</h2>
            <div className="categories-grid">
            {data.results.map(
                (cat)=><CategoryCard key={cat.id} name={cat.data.name}/>
            )}
            </div>
        </StyledCategoryContainer>
        :
        <p>Nothing yet</p>
    );
}

export default CategoryGrid;