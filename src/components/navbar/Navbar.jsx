import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true);
        return () => { (window.onscroll = null) };
    }

    console.log(scroll);

    return (
        <div className={!scroll ? 'navbar' : 'navbar scrolled'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" />
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New And Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className='icon' />
                    <span>KID</span>
                    <NotificationsNoneIcon className='icon' />
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon' />
                        <div className="options">
                            <span>Setting</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;