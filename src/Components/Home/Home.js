import React from 'react';
import './home.css';

export const Home = () => {
    return (
        <header>
            <div className="col-12 img-background p-0" id="home">
                <div className="cover">
                    <div className="container">
                        <div className="row intro-text">
                            <div className="col-12 text-center margin-restaurant">
                                <h1>Restaurant</h1>
                            </div>
                            <div className="col-12 mt-5 text-center">
                                <h6>Reservations: 123 456 789</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}