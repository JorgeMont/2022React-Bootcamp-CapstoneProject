import React from 'react';
import Logo from '../../Assets/companyLogo.png';
import HeaderLogo from './HeaderLogo';
import HeaderContainer from './HeaderStyled';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderLogo srcLogo={Logo}/>
                <div className='searchBarContainer'>
                    <SearchBar />
                </div>
                <div className='cardContainer'>
                    {/* <i className="fa-solid fa-cart-shopping" /> */}
                    <ShoppingCart />
                </div>
        </HeaderContainer>
    );
}

export default Header;