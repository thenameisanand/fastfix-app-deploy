import React from "react";

import './Header.css';

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {



  return (
    <div className="header">
 
      <div className="header__left">
        <span className="header_left1">Services</span>

        <span className="header_left2">Taskers</span>
      </div>

      <div className="header__center">
        <p>Fast Fix</p>
      </div>
      <div className="header__nav">
        <div className="header__option">
            <span className="header__optionLineTwo">Sign In</span>
          </div>
      

        <div className="header__option">
          <span className="header__optionLineOne">Become a Tasker</span>
        </div>
        

          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              
            </span>
          </div>
      </div>
    </div>
  );
}

export default Header;