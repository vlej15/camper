import React from "react";
import './css/Banner.scss'
import img1 from './css/img1.jpeg'

function BannerNotice() {
    return (
        <div className="banner">
            <div className="img-area">
                <img src={img1} />
            </div>
            <div className="text-area">
                <h3>N O T I C E</h3>
            </div>
            {/* <div className="end"></div> */}
        </div>
    );
}

export default BannerNotice;