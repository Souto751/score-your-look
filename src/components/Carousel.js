//-----------
//---React---
//-----------
import React from 'react';

//-------------------
//-Import Components-
//-------------------
import Left from './carousel-divs/Left';
import Right from './carousel-divs/Right';

//---------
//--Style--
//---------
import '../style/Carousel.css';

//-----------
//-Component-
//-----------
export default function Carousel() {
    return (
        <div className="carouselDiv">
            <div className="firstComponent"><Left /></div>
            <div className="secondComponent"><Right /></div>
        </div>
    )
}
