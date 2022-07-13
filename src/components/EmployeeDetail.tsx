import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Employee } from '../interface/interface';


// interface Props {
//     employees: Employee[],
// }

const EmployeeDetail: React.FC = () => {
    const params = useParams();
    const employeeId = params.employeeId;
    const [listEmployee, setListEmployee] = useState<Employee[]>([]);
    const [currentEmployee, setCurrentEmployee] = useState<Employee>();
    useEffect(() => {
        const getEmployee = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            const listEmployeeTemp = res.data;
            const listEmployee = listEmployeeTemp.map((employee: Employee) => {
                return {
                    id: employee.id,
                    name: employee.name,
                    email: employee.email,
                    phone: employee.phone,
                    website: employee.website,
                    address: {
                        city: employee.address.city,
                        street: employee.address.street,
                    },
                }
            });
            setListEmployee(listEmployee);
        }
        getEmployee();
        if (employeeId) {
            const currentEmployee = listEmployee.find(({ id }) => {
                return id.toString() === employeeId;
            })
            setCurrentEmployee(currentEmployee);
        }
    }, [employeeId])
    return (
        <div className="employee-detail-wrap">
            <h3>Detail</h3>
            <div className="employee-detail">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>{currentEmployee?.id}</td>
                            <td>{currentEmployee?.name}</td>
                            <td>{currentEmployee?.email}</td>
                            <td>{currentEmployee?.website}</td>
                            <td>{currentEmployee?.phone}</td>
                            <td>{currentEmployee?.address.city}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default EmployeeDetail
