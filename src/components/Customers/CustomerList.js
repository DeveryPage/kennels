import React, { useState, useEffect } from 'react';
//import the components we will need
import { CustomerCard } from './Customer';
import { GetAllCustomers} from '../../Modules/CustomerManager';
import { deleteCustomer } from '../../Modules/CustomerManager';

export const CustomerList = () => {
  // The initial state is an empty array
  const [Customers, setCustomers] = useState([]);

  const GetCustomers = () => {
    // After the data comes back from the API, we
    //  use the setCustomers function to update state
    return GetAllCustomers().then(CustomersFromAPI => {
        console.log(CustomersFromAPI)
      setCustomers(CustomersFromAPI)
    });
  };

  // got the Customers from the API on the component's first render
  useEffect(() => {
    GetCustomers();
  }, []);

  const handleDeleteCustomer = id => {
      deleteCustomer(id)
      .then(() => GetAllCustomers().then(setCustomers));
  };

  // Finally we use .map() to "loop over" the Customers array to show a list of Customer cards
  return (
    <div className="container-cards">
      {Customers.map(Customer => <CustomerCard key={Customer.id} Customer={Customer} handleDeleteCustomer={handleDeleteCustomer} />)}
    </div>
  );
};