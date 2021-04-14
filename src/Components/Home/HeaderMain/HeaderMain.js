import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile Start Here</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit at enim dolores tempora totam nesciunt quis itaque excepturi voluptatibus.</p>
                <div className="btn btn-primary">GET APPOINMENT</div>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;