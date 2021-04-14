import React from 'react';
import appoinmentDoctor from '../../../images/appointmentDoctor.png'
import './appoinment.css';
const Appointment = () => {
    return (
        <section className="container mt-5 p-5">
            <div className=" appoinment">
                <div className="row">
                    <div className="d-flex align-items-center justify-content-center doctorAppontment">
                    <div className="col-md-1"></div>
                        
                        <div className="col-md-5">
                            <img src={appoinmentDoctor} style={{height:'380px', width:'380px'}} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-7 mt-5">
                            <h6 style={{color:'#10cfe4',textDecoration:'bold'}}>Appoinment</h6>
                            <h3>Make Your appoinment today</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vitae.</p>
                            <div className="btn btn-primary">Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;