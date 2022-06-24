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

const SideBar = () => {
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
                (cat)=><CategoryLabel catName={cat.data.name} key={cat.id} />)
            }
        </div>
    </SideBarStyled>
    : 
    <p>Loading...</p>
    );
}

export default SideBar;