import React, { useContext, useEffect, useState } from 'react';
import AppoinmentByDate from '../AppoinmentByDate/AppoinmentByDate';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    console.log(appointments);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://desolate-shore-11609.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email:loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])


    return (
        <section style={containerStyle}>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5 mt-4 ">
                    <h5 className="mb-3">Dashboard</h5>
                    <Calendar className="mx-auto mt-5"
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5 mt-5">
                    <div className="mt-5">
                        <AppoinmentByDate appointments={appointments}></AppoinmentByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;