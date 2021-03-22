//-----------
//---React---
//-----------
import React, { Component } from 'react';

//----------
//--Images--
//----------
import menu from '../img/header/jersey.png';
import cart from '../img/header/cart.png';
import user from '../img/header/user.png';

//---------
//--Style--
//---------
import '../style/Header.css';

//-----------
//-Component-
//-----------
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title-div">
                    <h1 className="header-title">Score Your Look</h1>
                </div>

                <div></div> {/* -------------   Empty div, just for the spacing   ---------------- */}

                <div className="header-btns">
                    <button><img src={menu} alt="jersey-menu" /></button>
                    <button><img src={cart} alt="cart" /></button>
                    <button><img src={user} alt="user" /></button>
                </div>
            </div>
        )
    }
}
