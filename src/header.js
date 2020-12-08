import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="headerLogo"/>
            
            <div className="headerSearch">
                <input className="searchBar" text="text"/>
                <SearchIcon className="searchButton"/>
            </div>
            <div className="headerNav">
                <div className="headerOption">
                    <span className="headerOptionLineOne">Hello Guest</span>
                    <span className="headerOptionLineTwp">SignIn</span>
                </div>
                <div className="headerOption">
                    <span className="headerOptionLineOne">Returns & </span>
                    <span className="headerOptionLineTwo">Orders</span>
                </div>
                <div className="headerOption">
                    <span className="headerOptionLineOne">Try</span>
                    <span className="headerOptionLineTwo">Prime</span>
                </div>
                <div className="headerOptionBasket">
                    <ShoppingCartIcon />
                    <span className="headerOptionLineTwo headerBasketCount">0</span>
                </div>
                
                
            </div>
        </div>
    )
}

export default Header
