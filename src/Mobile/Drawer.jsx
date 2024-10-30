import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

function Drawer({ drawer, action, lang }) {
    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');

    const handler = (e, value) => {
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    };

    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <button onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                                <div className="offcanvas-brand text-center mb-40">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div id="menu" className="text-left">
                                    <ul className="offcanvas_main_menu">
                                        <li
                                            onClick={(e) => handler(e, 'home')}
                                            id="home"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="/#">Advice</Link>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === 'home' ? itemSize : '0px',
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
                                            onClick={(e) => handler(e, 'pages')}
                                            id="pages"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">Local Conveyancing</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === 'pages' ? itemSize : '0px',
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

                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a href="https://www.facebook.com">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.dribbble.com">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="mailto:info@cambridgeconveyancing.com">
                                                <i className="fal fa-envelope"></i>{' '}
                                                info@cambridgeconveyancing.com
                                            </a>
                                        </li>
                                        {/* Uncomment and replace with valid details if needed */}
                                        {/* <li>
                                            <a href="tel:+64234276244">
                                                <i className="fal fa-phone"></i> +(642) 342 762 44
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-map-marker-alt"></i>{' '}
                                                442 Belle Terre St Floor 7, San Francisco, AV 4206
                                            </a>
                                        </li> */}
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

export default Drawer;
