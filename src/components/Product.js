//-----------
//---React---
//-----------
import React from 'react';

//----------
//--Images--
//----------
import zoom from '../img/productBtns/zoom.png';
import link from '../img/productBtns/link.png';
import like from '../img/productBtns/like.png';

//---------
//--Style--
//---------
import '../style/Product.css';

//-----------
//-Component-
//-----------
export default function Product(props) {
    console.log(props);
    return (
        <div className="productDiv">
            <img src={props.props.front} alt="shirtImg" className="productImg" />
            <div className="productInfo">
                <span className="productName">{props.props.name}</span>
                <span className="productPrice">€{props.props.price}</span>
            </div>
            <div className="productHoverBtns">
                <button className="productBtn"><img src={zoom} alt="zoom" className="productBtnImg" /></button>
                <button className="productBtn"><img src={link} alt="link" className="productBtnImg" /></button>
                <button className="productBtn"><img src={like} alt="like" className="productBtnImg" /></button>
            </div>
        </div>
    )
}
