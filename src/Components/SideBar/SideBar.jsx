import React, {useState, useEffect} from "react";
import styled from "styled-components";
import productCategories from '../../utils/mocks/en-us/product-categories.json';
import CategoryLabel from "./CategoryLabel/CategoryLabel";

const SideBarStyled = styled.section`
    flex: 1 0 13rem;
    background-color: white;

    .categoriesContainer{
        display: flex;
        flex-direction: column;
    }

`;

const SideBar = ({selectedCatList, addSelectedCat}) => {
    const [categoriesList, setCategoriesList] = useState();

    useEffect(
        ()=>{
            setCategoriesList([...productCategories.results])
        }
        ,[]);

    return(
    categoriesList ? 
    <SideBarStyled>
        <div className="categoriesContainer">
            {categoriesList.map(
                (cat)=>
                <CategoryLabel 
                key={cat.id} 
                catName={cat.data.name} 
                selectedCatList={selectedCatList}
                addSelectedCat={addSelectedCat}
                />)
            }
        </div>
    </SideBarStyled>
    : 
    <p>Loading...</p>
    );
}

export default SideBar;