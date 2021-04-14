import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import AppointmentAllInfo from './AppointmentAllInfo';

const AppAppointments = () => {
    const [all, setAll] = useState([])
    fetch('https://desolate-shore-11609.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAll(data))

    return (


        <section className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-8 mt-5">
                    <h4>All Appointments</h4>
                    <div className="mt-5">

                        <table className="table table-borderless ">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Phone</th>
                                    <th className="text-secondary" scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    all.map(allApp => <AppointmentAllInfo allApp={allApp}></AppointmentAllInfo>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppAppointments;