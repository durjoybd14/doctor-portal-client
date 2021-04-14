import React from 'react';

const BlogsDetails = (props) => {
    const { name, img, title, date } = props.blogInfo
    
    return (
        <div className="col-md-4 mt-3">
            <div class="card" >
                <div class="card-footer d-flex align-items-center justify-content-center p-3">
                    <img src={img} style={{ width: '50px' }} class="card-img-button" alt="..." />
                    <div className="ms-3">
                        <h6>{name}</h6>
                        <small>{date}</small>
                    </div>
                </div>
                <div class="card-body p-4">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>

            </div>
        </div>
    );
};

export default BlogsDetails;