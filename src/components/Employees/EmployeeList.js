import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './Employee';
import { GetAllEmployees} from '../../Modules/EmployeeManager';

export const EmployeeList = () => {
  // The initial state is an empty array
  const [Employees, setEmployees] = useState([]);

  const GetEmployees = () => {
    // After the data comes back from the API, we
    //  use the setCustomers function to update state
    return GetAllEmployees().then(EmployeesFromAPI => {
        console.log(EmployeesFromAPI)
      setEmployees(EmployeesFromAPI)
    });
  };

  // got the Customers from the API on the component's first render
  useEffect(() => {
    GetEmployees();
  }, []);

  // Finally we use .map() to "loop over" the Customers array to show a list of Customer cards
  return (
    <div className="container-cards">
      {Employees.map(Employee => <EmployeeCard key={Employee.id} Employee={Employee} />)}
    </div>
  );
};