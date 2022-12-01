import React from 'react';  
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <img className="header_ logo"
                src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchIcon'/>
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineOne'>
                        & Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Yours
                    </span>
                    <span className='header_optionLineOne'>
                        Prime
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Header