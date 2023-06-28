import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        The About Us section of our antique selling website
                        provides information about our company's history, values,
                        and mission to help customers better understand our dedication
                        to providing quality antique items.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Ashoka Road, Connaught Place,
                            New Delhi, 11001
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0987 654 3210</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@antiqiuesofindia.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Art</span>
                    <span className="text">Jewelry</span>
                    <span className="text">Furniture</span>
                    <span className="text">Textile</span>
                    <span className="text">Instruments</span>
                    <span className="text">Toys and Games</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        ANTIQUES OF INDIA 2023. ALL RIGHTS RESERVED
                    </span>
                    <img src={Payment} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
