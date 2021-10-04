import React from "react"
import "./Employee.css"

export const EmployeeCard = ({Employee, handleDeleteEmployee}) => {
    return (
        <div className="card">
          <div className="card-content">
            {/* <picture>
              <img src={require('./dog.svg')} alt="My Dog" />
            </picture> */}
            <h3>Name: <span className="card-employeename">
              {Employee.name}
            </span></h3>
            <p>Location: {Employee.address}</p>
            <button type="button" onClick={() => handleDeleteEmployee(Employee.id)}>Terminate</button>
          </div>
        </div>
      );
    }
