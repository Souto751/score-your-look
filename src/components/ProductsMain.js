//-----------
//---React---
//-----------
import React from 'react';

//-------------------
//-Import Components-
//-------------------
import Product from './Product';

//---------
//--Style--
//---------
import '../style/ProductsMain.css';

//----------
//---JSON---
//----------
import productList from '../Products.json';

//----------
//--Images--
//----------
import promo1 from '../img/promos/promo1.png';
import promo1alt from '../img/promos/promo1-alt.png';

//-----------
//-Component-
//-----------
export default function ProductsMain() {

    let alternativePromo1 = false;

    const changePromo1 = () =>{
        setTimeout(() => {
            if(!alternativePromo1){
                document.getElementsByClassName('promo1img')[0].style.content = promo1alt;
            }else{
                document.getElementsByClassName('promo1img')[0].style.content = promo1;
            }
            alternativePromo1 = !alternativePromo1;
            changePromo1();
        }, 7000);
    }

    changePromo1();

    return (
        <div className="productsMain">
            <div className="promos">
                <div className="promo1"><img src={promo1} alt="30%off" className="promo1img" /></div>
                <div className="promo2"><img src={promo1alt} alt="30%off" className="promo1img" /></div>
            </div>
            
            <h2 className="lastProductsTitle">Lastest Products!</h2>

            <div className="lastProducts">
            {
                productList.map((x, k=0) => {
                    console.log(x);
                    return(
                        <Product key={k++} props={x} />
                    )
                })
            }
            </div>
        </div>
    )
}
