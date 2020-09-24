import React from 'react';
import { Specials } from '../../Components/Specials/Specials.js';

export const SpecialList = () => {
    return (
        <section id="specials" className="my-2 my-lg-5">
            <div className="row">
                <div className="col-12 text-center mb-lg-5">
                    <h2>Our Specials</h2>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <Specials src="/img/Specials/1.jpg" tittle="Lorem ipsum 1">
                            1. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum 
                            </Specials>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <Specials src="/img/Specials/2.jpg" tittle="Lorem ipsum 2">
                            2. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum  
                            </Specials>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <Specials src="/img/Specials/3.jpg" tittle="Lorem ipsum 3">
                            3. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum  
                            </Specials>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}