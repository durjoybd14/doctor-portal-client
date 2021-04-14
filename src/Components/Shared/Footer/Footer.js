import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <footer className="container p-5 mt-5">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <Link className="link" to="/emergency">Emergency Dental Care</Link>
                    <Link className="link" to="/checkup">Check Up</Link><br/>
                    <Link className="link" to="/personal-treatment">Treatment of Personal Diseases</Link><br/>
                    <Link className="link" to="/tooth-extract">Tooth Extraction</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/><br/>
                </div>
                <div className="col-md-3">
                    <h5 className="text-primary">Services</h5>
                    <Link className="link" to="/emergency">Emergency Dental Care</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/>
                    <Link className="link" to="/personal-treatment">Treatment of Personal Diseases</Link><br/>
                    <Link className="link" to="/tooth-extract">Tooth Extraction</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/><br/>
                </div>
                <div className="col-md-3">
                    <h5 className="text-primary">Oral Health</h5>
                    <Link className="link" to="/emergency">Emergency Dental Care</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/>
                    <Link className="link" to="/personal-treatment">Treatment of Personal Diseases</Link><br/>
                    <Link className="link" to="/tooth-extract">Tooth Extraction</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/>
                    <Link className="link" to="/checkup">Check Up</Link><br/><br/>
                </div>
                <div className="col-md-3">
                    <h5 className="text-primary">Our Address</h5><br/>
                    <Link className="link" to="//google.com/map">New York-101010 Hudson</Link><br />
                    <Link className="link" to="//google.com/map">Yeards</Link><br/>
                    <ul className="social-media list-inline mt-3 d-flex">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="active-icon" icon={faFacebook}></FontAwesomeIcon></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6 className="text-secondary">Call now</h6>
                        <button className="btn btn-primary">+2025550295</button>
                    </div>

                </div>
                <div className="copyRight text-center text-muted mt-5">
                    <p>Copyright &copy;{(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;