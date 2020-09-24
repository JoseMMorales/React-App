import React from 'react';
import { Link } from 'react-scroll';
import './footer.css';

export const Footer = () => {
    return (
        <div className="row footer-wide">
            <div className="col-8 d-flex justify-content-center footer-text">
                <p>@ 2020 Restaurant. All rights reserved. Built by <a href="https://github.com/JoseMMorales" rel="nofollow">Jose MMorales</a></p>
            </div>
            <div className="col-4 social">
                <ul>
                    <li>
                        <Link to="home">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="home">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="home">
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}