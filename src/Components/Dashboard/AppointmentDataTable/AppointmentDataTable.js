import React from 'react';

const AppointmentDataTable = ({ app}) => {
    return (

        <>
            {

                <tr>
                    <td>{app.name}</td>
                    <td>{app.phone}</td>
                    <td>{app.email}</td>
                </tr>
            }
        </>
    );
};

export default AppointmentDataTable;