import React from 'react';

const AppointmentAllInfo = ({allApp}) => {
    return (
        <>
        {

            <tr>
                <td>{allApp.name}</td>
                <td>{allApp.phone}</td>
                <td>{allApp.email}</td>
            </tr>
        }
    </>
    
    );
};

export default AppointmentAllInfo;