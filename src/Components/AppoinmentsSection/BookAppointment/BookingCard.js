import React, { useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookingCard = ({ bookings, date }) => {
    const { subject, visitingHour, totalSpace } = bookings;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4 mt-3 text-center">
            <div class="card">
                <div class="card-header text-primary">{subject}</div>
                <div class="card-body">
                    <h5 class="card-title">{visitingHour}</h5>
                    <p class="card-text text-muted">{totalSpace} spaces available</p>
                    <button onClick={openModal} className="btn btn-primary">Book Appointment</button>
                    <AppoinmentForm bookinOn={subject} modalIsOpen={modalIsOpen} closeModal={closeModal} date={date}></AppoinmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;