import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Animal">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Employees">Employees</Link>
            </li>
        </ul>
    )
}
