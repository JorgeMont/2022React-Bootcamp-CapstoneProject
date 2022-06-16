import { useEffect, useState } from "react";
import styled from "styled-components";
import CategoriesList from '../utils/mocks/en-us/product-categories.json'
import CategoryCard from "./CategoryCard";

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #eaeded;
    padding: 2rem 0;

    h2{
        padding: 1rem 0;
    }
    .categories-grid{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
    }

    @media(max-width: ){

    }
`;

const CategoryGrid = () => {
    const [categoriesArray, setCategoriesArray] = useState();
    useEffect(()=>{
        setCategoriesArray([...CategoriesList.results]);
    },[])
    return(
        categoriesArray ? 
        <CategoryContainer>
            <h2>Explore our main categoriesss</h2>
            <div className="categories-grid">
            {categoriesArray.map(
                (cat)=><CategoryCard key={cat.id} name={cat.data.name}/>
            )}
            </div>
        </CategoryContainer>
        :
        <p>Nothing yet</p>
    );
}

export default CategoryGrid;