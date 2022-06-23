import React from 'react';
import styled from 'styled-components';

const SearchBarStyled = styled.div`
    form{
        padding: 0 0.7rem;

        input{
            height: 2rem;
            width: 20rem;
            padding: 0 0.5rem;
            border-radius: 5px 0 0 5px;
            border-style: none;
            text-align: right;
        }

        .buttonSearch{
            height: 2rem;
            width: 3rem;
            border-style: none;
            border-radius: 0 5px 5px 0;
            background-color: #febd69;

            &:hover{
                cursor: pointer;
            }
        }

        @media(max-width: 400px){
            input{
                width: 10rem;
            }
        }
    }
`;

const SearchBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Se intento busqueda');
    }
    return (
        <SearchBarStyled>
            <form className='searchBar' onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" />
                <button className='buttonSearch' type='submit'>
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </form>
        </SearchBarStyled>
    );
}

export default SearchBar;