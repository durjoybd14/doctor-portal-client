import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorDetails = (props) => {
    const { name, phone, email } = props.doctor;
    return (
        <div className="col-md-4 mt-3">
            <div class="card" >
                <div class="card-footer p-3">
                    {/* <img src={`https://desolate-shore-11609.herokuapp.com/${img}`} style={{ width: '300px' }} class="card-img" alt="..." /> */}
                    <img style={{ width: '300px' }} class="card-img" src={`data:image/png;base64,${props.doctor.image.img}`} alt="" />
                    <div className="mt-3 text-center">
                        <h5>{name}</h5>
                        <h6>{email}</h6>
                        <small><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}></FontAwesomeIcon> {phone}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;