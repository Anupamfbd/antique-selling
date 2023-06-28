import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
    const { getTotalCart } = useContext(ShopContext);
    const num = getTotalCart();
    const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/shop")}>Shop</li>
                    </ul>
                    <div id="mobile"> 
                      <ul className="mobile-menu">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/shop")}>Shop</li>
                      </ul>
                    </div>
                    <div className="center" onClick={() => navigate("/")}>
                        Antiques of India 
                    </div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                        >
                         <div className="link-icon" onClick={() => navigate("/cart")}><CgShoppingCart /></div>
                         <span>{num}</span>   
                        </span>
                    </div>
                </div>
            </header>
           
        </>
    );
};

export default Header;
