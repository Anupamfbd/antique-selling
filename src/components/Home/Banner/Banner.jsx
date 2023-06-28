import React from "react";
import {useNavigate} from 'react-router-dom';

import "./Banner.scss";
import BannerImg from "../../../assets/telescope-ta.png";

const Banner = () => {
 
    const navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Explore</h1>
                    <p>
                        Welcome to our antique selling website, where
                        you can find unique and valuable pieces from
                        different eras and styles.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2" onClick={() => navigate("/shop")}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
