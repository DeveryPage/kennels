import React from "react"
import "./Customer.css"

export const CustomerCard = ({Customer, handleDeleteCustomer}) => {
    console.log(Customer)
        return (
            <div className="card">
              <div className="card-content">
                {/* <picture>
                  <img src={require('./dog.svg')} alt="My Dog" />
                </picture> */}
                <h3>Name: <span className="card-customername">
                  {Customer.name}
                </span></h3>
                <p>Address: {Customer.address}</p>
                <button type="button" onClick={() => handleDeleteCustomer(Customer.id)}>Delete</button>
              </div>
            </div>
          );
        }
