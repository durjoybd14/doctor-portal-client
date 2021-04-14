import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const ServicesData = [
        {
            name: 'Fluoride Treatment',
            img: flouride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: whitening
        }
    ]
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{color: '#15d0e9'}}>Our Services</h5>
                <h2>Secvice We Provide</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        ServicesData.map(service=> <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;