import React, { useEffect, useState } from 'react';
import DoctorDetails from './DoctorDetails';

const Doctors = () => {
  
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://desolate-shore-11609.herokuapp.com/doctorsFile')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className="container">
            <div className="row">
                <div>
                    <h4 className="text-primary text-center mt-5 p-5">Our Doctors</h4>
                </div>
                {
                    doctors.map(doctor =><DoctorDetails doctor={doctor}></DoctorDetails>)
                }
            </div>
        </section>
    );
};

export default Doctors;