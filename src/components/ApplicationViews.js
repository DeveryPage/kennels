import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./Animal/AnimalList"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/Animal">
                <AnimalList />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/Customers">
                <CustomerList />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/Employees">
                <EmployeeList />
            </Route>
        </>
    )
}
