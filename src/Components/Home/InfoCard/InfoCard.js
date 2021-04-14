import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = (props) => {
    const { title, description, icon, background } = props.info;
    return (
        <div className="col-md-4 text-white px-1">
            <div className={` rounded p-4 d-flex justify-content-evenly align-items-center info-${background}`}>
                <div>
                    {
                        <FontAwesomeIcon className='icon-size' icon={icon}></FontAwesomeIcon>
                    }
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;