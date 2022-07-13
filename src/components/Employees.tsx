import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Employee } from '../interface/interface';

interface Props {
    employees: Employee[],
}

const Employees: React.FC<Props> = (props: Props) => {
    const { employees } = props;
    return (
        <div className="table-list-employee">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Feature</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`${item.id}`}>
                                        <button>Detail</button>
                                    </Link>

                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Employees
