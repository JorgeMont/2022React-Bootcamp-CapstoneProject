import { useEffect, useState } from "react";
import styled from "styled-components";
import CategoriesList from '../utils/mocks/en-us/product-categories.json'
import CategoryCard from "./CategoryCard";

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #eaeded;
    padding: 2rem 0;
`;

const CategoryGrid = () => {
    const [categoriesArray, setCategoriesArray] = useState();
    useEffect(()=>{
        setCategoriesArray([...CategoriesList.results]);
    },[])
    return(
        categoriesArray ? 
        <CategoryContainer>
            {categoriesArray.map(
                (cat)=><CategoryCard key={cat.id} name={cat.data.name}/>
            )}
        </CategoryContainer>
        :
        <p>Nothing yet</p>
    );
}

export default CategoryGrid;