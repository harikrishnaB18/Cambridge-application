import React, { useEffect } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import StickyMenu from './StickyMenu.js';
import Navigation from './Navigation.jsx';

function HeaderHomeTwo({ action }) {
    useEffect(() => {
        StickyMenu();
    }, []);
    return (
        <>
            <header className="appie-header-area appie-header-2-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <Link to="/#">
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-sm-1 order-3 order-sm-2 text-right">
                                <div className="appie-header-main-menu ">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-2  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    <a className="main-btn ml-30" href="/purchasing-property">
                                        Get a Quote
                                    </a>
                                    <div
                                        onClick={(e) => action(e)}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderHomeTwo;
