import React from 'react';

const ServiceDetails = (props) => {
    const {name, img} = props.service;
    return (
            <div className="col-md-4 p-5 text-center">
                <img src={img} height="50px" alt=""/>
                <h5 className="mt-3">{name}</h5>
                <p className="mt-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia numquam cupiditate expedita ad sapiente et.</p>
            </div>
    );
};

export default ServiceDetails;