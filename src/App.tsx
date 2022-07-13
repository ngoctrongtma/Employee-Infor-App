import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Employees from './components/Employees';
import { Employee } from './interface/interface';
import { Outlet } from 'react-router-dom';



const App: React.FC = () => {
  const [listEmployee, setListEmployee] = useState<Employee[]>([]);
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
  }, [])
  return (
    <div className="App" >
      <header className="App-header">
        <h1>List of employee</h1>
        <Employees employees={listEmployee}></Employees>
      </header>
      <Outlet></Outlet>
    </div >
  );
}

export default App;
