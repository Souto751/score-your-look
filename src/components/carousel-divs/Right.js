//-----------
//---React---
//-----------
import React from 'react';

//-----------
//---Image---
//-----------
import img from '../../img/carousel/intro-1.png';
import rightArrow from '../../img/carousel/left.png';

//---------
//--Style--
//---------
import '../../style/Right.css';

//-----------
//-Component-
//-----------
export default function Right () {

    let autoMove;
    let move = false;   // Bool for determinate if the carousel has to rotate.

    const moveLeft = () => {
        document.getElementsByClassName('left-div')[0].style.animation = "moveLeft 2s forwards";
        document.getElementsByClassName('right-div')[0].style.animation = "moveLeft 2s forwards";
    }

    const moveAutoLeft = () => {
        autoMove = setTimeout(() => {
            if(move){
                moveLeft();
            }
            move = !move;
            moveAutoLeft();
        }, 7000);
    }

    moveAutoLeft();    // Starts auto slide.

    const stopAutoMove = () => {
        clearTimeout(autoMove);
    }

        return (
            <div className="right-div">
                <div className="right">
                    <img src={img} alt="jerseys" className="right-image" />
                </div>
                <div className="right-left">
                    <div></div> {/* -------------   Empty div, just for the spacing   ---------------- */}
                    <div className="right-left-info">
                        <h2 className="right-left-title">Title...</h2>
                        <p className="right-left-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a elit vitae urna hendrerit accumsan interdum at lectus. Nam quis pharetra odio. Vivamus in lorem mi. Etiam mollis, turpis in.</p>
                    </div>
                    <div className="right-left-btn-div">
                        <button class="right-left-btn" onClick={() => {moveLeft(); stopAutoMove();}}>
                            <img src={rightArrow} alt="left" className="right-left-img" />
                        </button>
                    </div>
                </div>
            </div>
        )
}