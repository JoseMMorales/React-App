import React from 'react';
import './imagesGallery.css';

export const ImagesGallery = () => {
    return (
        <section className="row py-2 my-lg-5">
            <div className="col-xs-6 col-md-3 col-lg-3 px-1 images-gallery">
                <img src="img/Gallery/01.jpg" alt="" />
            </div>
            <div className="col-xs-6 col-md-3 col-lg-3 px-1 images-gallery">
                <img src="img/Gallery/02.jpg" alt="" />
            </div>
            <div className="col-xs-6 col-md-3 col-lg-3 px-1 images-gallery">
                <img src="img/Gallery/03.jpg" alt="" />
            </div>
            <div className="col-xs-6 col-md-3 col-lg-3 px-1 images-gallery">
                <img src="img/Gallery/04.jpg" alt="" />
            </div>
        </section>
    )
}