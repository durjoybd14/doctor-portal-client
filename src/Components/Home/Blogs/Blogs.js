import React from 'react';
import winson from './../../../images/Ellipse 1.png';
import ema from './../../../images/Ellipse 2.png';
import BlogsDetails from './BlogsDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';
const Blogs = () => {
    const blogsInfo = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aperiam',
            img: winson,
            name: 'Dr. Winson',
            date: '20th june 2020'

        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aperiam',
            img: ema,
            name: 'Dr. Ema',
            date: '20th june 2020'
        }
    ]
    return (
        <section className="container mt-5">
            <div className="text-center">
                <h6 style={{ color: '#11d0dc' }}>OUR BLOG</h6>
                <h2>From Our Blog News</h2>
            </div>
            <div className="row">
                <div className="col-md-4 mt-3 ">
                    <div class="card blog-left" style={{ height: '18rem' }}>
                        <div class="card-footer d-flex align-items-center justify-content-start p-3">
                            <div className="ms-3">
                                <h6>Rasedh Kabir</h6>
                                <small>20th August 2020</small>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <h5 class="card-title mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aperiam</h5>
                            <FontAwesomeIcon style={{fontSize:'30px'}} icon={faArrowRight}></FontAwesomeIcon>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        </div>

                    </div>
                </div>
                {
                    blogsInfo.map(blogInfo => <BlogsDetails blogInfo={blogInfo}></BlogsDetails>)
                }
            </div>
        </section>
    );
};

export default Blogs;