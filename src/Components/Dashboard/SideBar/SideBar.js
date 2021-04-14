import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './SideBar.css';

const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://desolate-shore-11609.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])
    return (
        <aside className="py-3">
            <ul>
                <li><i className="fa fa-home" aria-hidden="true"></i> <Link className="link" to="/home">Home</Link></li>
                <li><i className="fa fa-bars" aria-hidden="true"></i> <Link className="link" to="/dashboard">Dashboard</Link></li>
                {isDoctor &&
                    <div>
                        <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i> <Link className="link" to="/allAppointments">Appointments</Link></li>
                        <li><i className="fa fa-plus-square" aria-hidden="true"></i> <Link className="link" to="/dashboard/addDoctor">Add New Doctor</Link></li>
                        <li><i className="fa fa-users" aria-hidden="true"></i> <Link className="link" to="/patients">Patients</Link></li>
                        <li><i className="fa fa-users" aria-hidden="true"></i> <Link className="link" to="/allDoctor">All Doctors</Link></li>
                        <li><i className="fa fa-address-book" aria-hidden="true"></i> <Link className="link" to="/prescription">Prescription</Link></li>
                        <li><i className="fa fa-cogs" aria-hidden="true"></i> <Link className="link" to="/setting">Setting</Link></li>
                    </div>
                }
            </ul>
            <div className="mt-5 p-4">
                <h6 className="link text-white"><i class="fa fa-sign-out" aria-hidden="true"></i> <Link to="/">Logout</Link></h6>
            </div>
        </aside>
    );
};

export default SideBar;