import { useEffect, useState } from "react";
import StyledCategoryContainer from "./StyledCategoryGrid";
import CategoriesList from '../../utils/mocks/en-us/product-categories.json'
import CategoryCard from "./CategoryCard/CategoryCard";

const CategoryGrid = () => {
    const [categoriesArray, setCategoriesArray] = useState();
    useEffect(()=>{
        setCategoriesArray([...CategoriesList.results]);
    },[])
    return(
        categoriesArray ? 
        <StyledCategoryContainer>
            <h2>Explore our main categories</h2>
            <div className="categories-grid">
            {categoriesArray.map(
                (cat)=><CategoryCard key={cat.id} name={cat.data.name}/>
            )}
            </div>
        </StyledCategoryContainer>
        :
        <p>Nothing yet</p>
    );
}

export default CategoryGrid;