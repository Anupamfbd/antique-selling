import React from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Gallery from "../../pages/gallery/gallery";

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <div className="main-content">
                <div className="layout">
                   
                
                </div>
            </div>
        </div>
    );
};

export default Home;
