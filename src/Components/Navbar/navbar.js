import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link
                    className="navbar-brand"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1200}
                >Restaurant
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto" >
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                        >Home
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="specials"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                        >Specials
                        </Link>
                    </li>     
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="history"
                            spy={true}
                            smooth={true}
                            offset={-55}
                            duration={1000}
                        >History
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="menu"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                        >Menu
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                        >Contact
                        </Link>
                    </li>                           
                </ul>
            </div>
        </div>
    );
}