import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul>
            <li>
                <Link to="/">
                    Advice <i className="fal fa-angle-down" />
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/conveyancing-process">Conveyancing Process</Link>
                    </li>
                    <li>
                        <Link to="/what-a-conveyancing-solicitor-does">What a Conveyancing Solicitor Does</Link>
                    </li>
                    <li>
                        <Link to="/3-stages-of-conveyancing">3 Stages of Conveyancing</Link>
                    </li>
                    <li>
                        <Link to="/guide-to-remortgaging-in-cambridge">Guide to Remortgaging in Cambridge</Link>
                    </li>
                    <li>
                        <Link to="/how-long-does-conveyancing-take">How Long Does Conveyancing Take</Link>
                    </li>
                    <li>
                        <Link to="/conveyancing-for-first-time-buyers">Conveyancing for First Time Buyers</Link>
                    </li>
                </ul>
            </li>
            
            <li>
                <Link to="/">
                Local Conveyancing <i className="fal fa-angle-down" />
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/conveyancing-in-cambridge">Cambridge Conveyancing</Link>
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

            <li>
                <Link to="/contact-us">Contact Us</Link>
            </li>
        </ul>
    );
}

export default Navigation;
