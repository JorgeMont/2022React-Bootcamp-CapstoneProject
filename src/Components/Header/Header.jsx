import React from 'react';
import Logo from '../../Assets/companyLogo.png';
import HeaderContainer from './HeaderStyled';

const Header = () => {

    return (
        <HeaderContainer>
            <div className='imgContainer'>
                <img src={Logo} alt="company logo" />
            </div>
            <section>
                <div className='searchBarContainer'>
                    <form className='searchBar'>
                        <input type="text" name="search" id="search" />
                        <button className='buttonSearch' type='submit'>
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                </div>
                <div className='cardContainer'>
                    <i className="fa-solid fa-cart-shopping" />
                </div>
            </section>
        </HeaderContainer>
    );
}

export default Header;