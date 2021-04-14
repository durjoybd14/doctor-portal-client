import React from 'react';

const TestimonialDetails = (props) => {
    const { name, img, city } = props.patientTalk
    return (
            <div className="col-md-4 mt-3">
                <div class="card">
                    <div class="card-body p-4">
                        <p class="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, quia!</p>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-center p-3">
                        <img src={img} style={{width:'50px'}} class="card-img-button" alt="..." />
                        <div className="ms-3">
                            <h6>{name}</h6>
                            <small>{city}</small>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default TestimonialDetails;