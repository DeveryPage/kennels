import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./Animal/AnimalList"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { LocationList } from "./Locations/LocationList"
import { AnimalDetail } from "./Details/AnimalDetail"
import { AnimalForm } from './Animal/AnimalForm'


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}



            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/Customers">
                <CustomerList />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/Employees">
                <EmployeeList />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/Locations">
                <LocationList />
            </Route>


        
            <Route path="/animals/create">
                <AnimalForm />
            </Route>

        </>
    )
}
