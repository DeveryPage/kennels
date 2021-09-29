import React from "react"

export const GetCurrentDate = () => {
    let today = new Date()
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return `Today's Date is ${month<10?`0${month}`:`${month}`}-${date}-${year}`
}

console.log(GetCurrentDate())