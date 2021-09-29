import React from "react"
import { AnimalCard } from "./Animal/AnimalCard"
import { CustomerCard } from "./Customers/Customer"
import { LocationCard } from "./Locations/Location"
import { EmployeeCard } from "./Employees/Employee"
import "./Kennel.css"
import { PropsAndState } from "./PropsAndState"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Kennel = () => {

return (

    <>
        <NavBar />
        <ApplicationViews />
    </>
)
}