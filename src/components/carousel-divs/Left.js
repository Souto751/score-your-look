//-----------
//---React---
//-----------
import React from 'react';

//-----------
//---Image---
//-----------
import img from '../../img/carousel/intro-2.png';
import rightArrow from '../../img/carousel/right.png';

//---------
//--Style--
//---------
import '../../style/Left.css';

//-----------
//-Component-
//-----------
export default function Left () {

    let autoMove;
    let move = false;   // Bool for determinate if the carousel has to rotate.

    const moveRight = () => {
        document.getElementsByClassName('left-div')[0].style.animation = "moveRight 2s forwards";
        document.getElementsByClassName('right-div')[0].style.animation = "moveRight 2s forwards";
    }

    const moveAutoRight = () => {
        setTimeout(() => {
            if(!move){
                moveRight();
            }
            move = !move;
            moveAutoRight();
        }, 7000);
    }

    const stopAutoMove = () => {
        clearTimeout(autoMove);
    }

    moveAutoRight();    // Starts auto slide.
        return (
            <div className="left-div">
                <div className="left">
                    <img src={img} alt="jerseys" className="left-image" />
                </div>
                <div className="left-right">
                    <div></div> {/* -------------   Empty div, just for the spacing   ---------------- */}
                    <div className="left-right-info">
                        <h2 className="left-right-title">Title...</h2>
                        <p className="left-right-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a elit vitae urna hendrerit accumsan interdum at lectus. Nam quis pharetra odio. Vivamus in lorem mi. Etiam mollis, turpis in.</p>
                    </div>
                    <div className="left-right-btn-div">
                        <button class="left-right-btn" onClick={() => {moveRight(); stopAutoMove();}}>
                            <img src={rightArrow} alt="right" className="left-right-img" />
                        </button>
                    </div>
                </div>
            </div>
        )
}