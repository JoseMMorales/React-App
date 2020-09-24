import React from 'react';
import { Contacts } from '../../Components/Contacts/Contacts.js';
import './contactList.css';

export const ContactList = () => {
    return (
        <div id="contact" className="row contact py-0 py-lg-5">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <Contacts title="Reservations" text1="Please Call" text2="(+915) 23 456 789" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <Contacts title="Address" text1="C/Manuel Heredia 17" text2="29130 Malaga" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <Contacts title="Opening Hours" text1="Mon-Thurs: 10:00 AM - 11:00 PM" text2="Fri-Sun: 10:00 AM - 02:00 AM" />
            </div>
            <div className="col-sm-12 mt-5">
                <Contacts title="Send us a message" />
            </div>
            <div className="col-12 mt-12">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end mt-4">
                        <input type="text" placeholder="Name" className="background-input-text" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-left mt-4">
                        <input type="email" placeholder="Email" className="background-input-text" />
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 mx-auto mt-4">
                        <textarea name="message" className="form-control message" rows="6" placeholder="Message" />
                    </div>
                    <div className="col-sm-12 mt-3 text-center">
                        <button type="submit" className="btn btn-custom btn-lg">Send Message </button>  
                    </div>
                </div>
            </div>
        </div>
    )
}