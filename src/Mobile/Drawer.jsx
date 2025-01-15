import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Mobile/Drawer.css';
import logo from '../Images/logo.png';

function Drawer({ drawer = false, action = () => {} }) {
    const [itemSize, setItemSize] = useState('0px');
    const [activeItem, setActiveItem] = useState('home');

    const handleMenuClick = (value) => {
        const itemsCount = document.querySelectorAll(`#${value} li`).length;
        if (itemsCount > 0) {
            setItemSize(`${43 * itemsCount}px`);
            setActiveItem(value);
        }
    };

    return (
        <>
            <div
                onClick={action}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>

            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <button onClick={action} className="close-btn">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>

                                {/* Logo */}
                                <div className="offcanvas-brand text-center mb-40">
                                    <Link to="/">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>

                                {/* Menu Items */}
                                <div id="menu" className="text-left">
                                    <ul className="offcanvas_main_menu">
                                        <li
                                            onClick={() => handleMenuClick('home')}
                                            id="home"
                                            className={`menu-item-has-children ${
                                                activeItem === 'home' ? 'active' : ''
                                            }`}
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="/#">Advice</Link>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: activeItem === 'home' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link to="/">Conveyancing Process</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">What a Conveyancing Solicitor Does</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">3 Stages of Conveyancing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">Guide to Remortgaging in Cambridge</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">How Long Does Conveyancing Take</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">Conveyancing for First Time Buyers</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li
                                            onClick={() => handleMenuClick('pages')}
                                            id="pages"
                                            className={`menu-item-has-children ${
                                                activeItem === 'pages' ? 'active' : ''
                                            }`}
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="/#">Local Conveyancing</Link>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: activeItem === 'pages' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link to="/#">Cambridge Conveyancing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">Ely Conveyancing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">Peterborough Conveyancing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#">Chelmsford Conveyancing</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li id="contact" className="menu-item">
                                            <Link to="/#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Social Icons */}
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/#">
                                                <i className="fab fa-dribbble"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Footer Information */}
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <Link to="/#">
                                                <i className="fal fa-envelope"></i> info@cambridgeconveyancing.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Drawer.propTypes = {
    drawer: PropTypes.bool.isRequired,
    action: PropTypes.func,
};

export default Drawer;
