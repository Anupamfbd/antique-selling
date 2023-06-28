import React from "react";
import img1 from "../../assets/galleries/image1.jpg";
import img2 from "../../assets/galleries/image2.jpg";
import img3 from "../../assets/galleries/image3.jpg";
import img4 from "../../assets/galleries/image4.jpg";
import img5 from "../../assets/galleries/image5.jpg";
import img6 from "../../assets/galleries/image6.jpg";
import img7 from "../../assets/galleries/image7.jpg";
import img8 from "../../assets/galleries/image8.jpg";
import img9 from "../../assets/galleries/image9.jpg";
import img10 from "../../assets/galleries/image10.jpg";
import img11 from "../../assets/galleries/image11.jpg";
import img12 from "../../assets/galleries/image12.jpg";
import "./gallery.scss";


const Gallery = () => {

    return (
        <div className="main">
            <div className="row">
              <img className="img" src={img1}  alt=""/>
              <img className="img" src={img2}  alt=""/>
              <img className="img" src={img3}  alt=""/>
            </div>
            <div className="row">
              <img className="img" src={img4}  alt=""/>
              <img className="img" src={img5}  alt=""/>
              <img className="img" src={img6}  alt=""/>
            </div>
            <div className="row">
              <img className="img" src={img7}  alt=""/>
              <img className="img" src={img8}  alt=""/>
              <img className="img" src={img9}  alt=""/>
            </div>
            <div className="row">
              <img className="img" src={img10}  alt=""/>
              <img className="img" src={img11}  alt=""/>
              <img className="img" src={img12}  alt=""/>
            </div>
        </div>
        
    );
};

export default Gallery;