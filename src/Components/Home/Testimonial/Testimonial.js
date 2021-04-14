import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import winson from './../../../images/Ellipse 1.png';
import ema from './../../../images/Ellipse 2.png';
import ellipse from './../../../images/Ellipse 3.png'
import TestimonialDetails from './TestimonialDetails';


const Testimonial = () => {
    const patientsTalk = [
        {
            name: 'Winson',
            city: 'California',
            img: winson
        },
        {
            name: 'Ema',
            city: 'New York',
            img: ema
        },
        {
            name: 'Ellipse',
            city: 'Florida',
            img: ellipse
        }
    ]
    return (
        <section className="container p-5">
            <div className="p-5 d-flex justify-content-between align-items-center">
                <div>
                    <h6>TESTIMONIAL</h6>
                    <h3>What's Our Patients Says</h3>
                </div>

                <div>
                    <FontAwesomeIcon style={{ fontSize: '100px', color: '#d6f6f6' }} icon={faQuoteLeft}></FontAwesomeIcon>
                </div>
            </div>
            <div className="row">
                {
                    patientsTalk.map(patientTalk => <TestimonialDetails patientTalk={patientTalk}></TestimonialDetails>)
                }
            </div>
        </section>
    );
};

export default Testimonial;