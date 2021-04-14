import React, { useState } from 'react';
import MenuBar from '../../Home/MenuBar/MenuBar';
import Footer from '../../Shared/Footer/Footer';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const AppointmentPart = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date)
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <AppoinmentHeader handleDateChange={handleDateChange}></AppoinmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentPart;