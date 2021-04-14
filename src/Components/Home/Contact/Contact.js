import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="container mt-5 p-5 contact-container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-center">
                    <h5 className="text-primary">Contact Us</h5>
                    <h2 className="text-white">Always Connect With Us</h2>
                    <form action="" className="mt-5">
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address*" />
                        </div>

                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Subjects*" />
                        </div>

                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your Message*"></textarea>
                        </div>
                        <button className="btn btn-primary text-center">Submit</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </section>
    );
};

export default Contact;