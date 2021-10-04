import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './Employee';
import { GetAllEmployees, deleteEmployee} from '../../Modules/EmployeeManager';
import { GetAllCustomers } from '../../Modules/CustomerManager';


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

  const handleDeleteEmployee = id => {
      deleteEmployee(id)
      .then(() => GetAllCustomers().then(setEmployees));
  }

  // Finally we use .map() to "loop over" the Customers array to show a list of Customer cards
  return (
    <div className="container-cards">
      {Employees.map(Employee => <EmployeeCard key={Employee.id} Employee={Employee} handleDeleteEmployee={handleDeleteEmployee} />)}
    </div>
  );
};