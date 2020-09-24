import React from 'react';
import './specials.css';

export const Specials = ({tittle, src, children}) => {
    return (
        <div className="row">
            <div className="col-12 my-2">
                <h3 className="text-center">{tittle}</h3>
            </div>
            <div className="col-12 my-2">
                <img src={src} alt={tittle} className="img-fluid mx-auto d-block"/>
                <p className="text-center my-2">
                  {children}
                </p>
            </div>
        </div>
    )
}