import React from "react"
import "./Employee.css"

export const EmployeeCard = ({Employee}) => {
    return (
    <section className="employee">
        <h3 className="employee__name">{Employee.name}</h3>
        <div className="job__place">{Employee.address}</div>
    </section>
)
}
