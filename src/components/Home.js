import React from "react";
import { PropsAndState } from './PropsAndState'
import { GetCurrentDate } from "../Modules/Date"

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <GetCurrentDate />

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Brenda"} />
        
    </>
)


