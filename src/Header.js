import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{ basket }] = useStateValue();
    console.log(basket)


    return (
        <div className='header'>

            {/*logo on the left*/}
            <Link to='/'>
                <img className='header__logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon" />
            </Link>

            {/* serch box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* 3links, */}
            <div className="header__nav">
                {/*1st link ;*/}
                <Link to='/login' className='header__link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>hello</span>
                        <span className='header__optionLineTwo' >sign In</span>
                    </div>

                </Link>
                {/*2nd link ;*/}
                <Link to='/' className='header__link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                {/*3rd link ;*/}
                <Link to='/' className='header__link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                {/* 4th link;*/}
                <Link to='/checkout' className='header__link'>
                    <div className="header__optionBasket">
                        {/*shoping basket */}
                        <ShoppingBasketIcon />
                        {/*number of items in the basket */}
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>


            </div>
            {/* basket with number*/}
        </div>
    )
}

export default Header
