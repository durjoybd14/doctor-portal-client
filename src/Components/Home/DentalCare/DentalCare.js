import React from 'react';
import babyCare from '../../../images/Mask Group 3.png'

const DentalCare = () => {
    return (
        <section className="container mt-3 p-3">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4 px-5">
                    <img src={babyCare} className="img-fluid rounded" style={{ width: '300px' }} alt="" />
                </div>

                <div className="col-md-4 mt-2">
                    <h2>Expectional Dental Care, On your Terms</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sed distinctio totam maxime officiis dignissimos recusandae blanditiis, quaerat numquam sapiente quisquam vero temporibus delectus excepturi ea aliquam et dicta nobis.</p>
                    <div className="btn btn-primary">Learn More</div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </section>
    );
};

export default DentalCare;