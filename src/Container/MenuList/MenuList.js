import React from 'react';
import { Menu } from '../../Components/Menu/Menu.js';

export const MenuList = () => {
  return (
        <section id="menu" className="my-2 my-lg-5">
            <div className="row">
                <div className="col-12 text-center mb-lg-5 mb-sm-2">
                    <h2>Menu</h2>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 py-3 px-lg-5">
                    <Menu type = "1" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 py-3 px-lg-5">
                    <Menu type = "2" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 py-3 px-lg-5">
                    <Menu type = "3" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 py-3 px-lg-5">
                    <Menu type = "4" />
                </div>
            </div>
        </section>
    )
}