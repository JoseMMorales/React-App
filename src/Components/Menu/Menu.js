import React from 'react';
import './menu.css';
import { ElementGroup, TypeElementGroup } from '../../Data/Data.js';

export const Menu = ({ type }) => {
   let nameType = TypeElementGroup.find(e => e.id.toString() === type).name;
    let elements = ElementGroup.filter(e => e.idType.toString() === type);
    const html = [];
    for (let i of elements) {
        html.push(
            <div key={i.id} className="row p-2">
                <div className="col-9 name-food">
                    {i.name}
                </div>
                <div className="col-3 text-right">
                    {i.price}
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10">
                    {i.description}
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="col-12 text-center mb-lg-5 mb-sm-2">
            <h3>{nameType}</h3>
            </div>
            {html}
        </div>
    )
}

