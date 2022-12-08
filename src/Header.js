import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from "@mui/icons-material"
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// import { SearchIcon, ShoppingBasketIcon } from '@mui/icons-material'
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />
            </Link>

            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <Search className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello {!user ? 'Guest': user.email}
                    </span>
                    <span className='header_optionLineTwo'>
                        {user ? 'Sign Out': 'Sign In'}</span>
                </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Yours
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className='header_optionBasket'>
                        <ShoppingBasket />
                        <span className='header_optionLineTwo 
                    header_basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header