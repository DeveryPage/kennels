const remoteURL = "http://localhost:5002"

export const GetEmployeeById = (EmployeeId) => {
  //be sure your Customers have good data and related to a location and customer
  return fetch(`${remoteURL}/Employees/${EmployeeId}?_expand=Locations&_expand=Animal`)
  .then(res => res.json())
}

export const GetAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then(res => res.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }