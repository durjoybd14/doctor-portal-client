import React from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AppoinmentByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div>
            {appointments.length ?
                <h4 className="lead text-center">Total Appointments: {appointments.length}</h4> :
                <h4 className="lead text-center">No Appointments for this Date</h4>
            }
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map(app => <AppointmentDataTable app={app}></AppointmentDataTable>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AppoinmentByDate;