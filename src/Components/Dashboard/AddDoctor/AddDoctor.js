import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handaleSubmit = () => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('phone', info.phone)

        fetch('https://desolate-shore-11609.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 mt-4 p-5">
                <h5>Add New Doctor</h5>
                <form onSubmit={handaleSubmit} className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onBlur={handleBlur} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone No</label>
                        <input onBlur={handleBlur} type="text" name="phone" className="form-control" id="phone" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="file" className="form-label">Upload a Image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="file" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-5"></div>
        </div>
    );
};

export default AddDoctor;