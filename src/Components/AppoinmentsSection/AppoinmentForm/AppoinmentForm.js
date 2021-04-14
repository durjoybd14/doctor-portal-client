import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppoinmentForm = ({ closeModal, modalIsOpen, bookinOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = bookinOn;
        data.date = date;
        data.created = new Date();

        fetch('https://desolate-shore-11609.herokuapp.com/addAppoinments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Appointment created successfully.');
                }
            })
    };

    return (

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >


            <div className="p-5">
                <h2 className="text-primary">{bookinOn}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="rounded mt-4">

                    <div className="input-group mb-3">
                        <div style={{ width: '400px' }}>
                            <select name="schedule" className="form-select" id="inputGroupSelect01" {...register("schedule", { required: true })}>
                                <option selected>Selected Time</option>
                                <option value="09:00am">09:00am</option>
                                <option value="12:00pm">12:00pm</option>
                                <option value="03:00pm">03:00pm</option>
                                <option value="07:00pm">07:00pm</option>
                            </select>
                            {errors.schedule && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <div style={{ width: '400px' }}>
                            <input type="text" name="name" className="form-control" defaultValue="" {...register("name", { required: true })} placeholder="Your Name" />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div style={{ width: '400px' }}>
                            <input type="text" name="phone" className="form-control" defaultValue="" {...register("phone", { required: true })} placeholder="Phone Number" />
                            {errors.phone && <span className="text-danger">This field is required</span>}

                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div style={{ width: '400px' }}>
                            <input type="email" name="email" className="form-control" defaultValue="" {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <span className="text-danger">This field is required</span>}

                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div style={{ width: '400px' }}>
                            <input name="date" className="form-control" defaultValue={date.toDateString()} {...register("date", { required: true })} />
                            {errors.date && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="input-group mb-3" style={{ width: '400px' }}>

                        <button onClick={closeModal} className="btn btn-danger me-auto" type="submit">CLOSE</button>
                        <button className="btn btn-success ms-auto" type="submit">SEND</button>
                    </div>

                </form>
            </div>
        </Modal>

    );
};

export default AppoinmentForm;