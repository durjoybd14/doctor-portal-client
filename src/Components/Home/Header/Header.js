import React from 'react';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <MenuBar></MenuBar>
            <HeaderMain></HeaderMain>
            <BussinessInfo></BussinessInfo>
        </div>
    );
};

export default Header;